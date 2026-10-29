import { NextResponse, type NextRequest } from "next/server";
import {
  checkRateLimit,
  cleanText,
  forwardWebhook,
  getClientIp,
  isValidEmail,
  verifyRecaptchaToken,
} from "@/lib/forms-server";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const limit = checkRateLimit(`contact:${ip}`);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many messages sent recently. Please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 });
  }

  if (cleanText(body.websiteUrl, 120)) {
    return NextResponse.json({ ok: true, referenceId: "AS-FILTERED" });
  }

  const name = cleanText(body.name, 120);
  const email = cleanText(body.email, 160);
  const subject = cleanText(body.subject, 120);
  const message = cleanText(body.message, 2000);

  if (name.length < 2 || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please include your name and a clear message (at least 10 characters)." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address so our desk can reply." },
      { status: 400 },
    );
  }

  const captcha = await verifyRecaptchaToken(
    typeof body.captchaToken === "string" ? body.captchaToken : null,
    ip,
  );
  if (!captcha.ok) {
    return NextResponse.json(
      { ok: false, error: captcha.reason || "Security verification failed." },
      { status: 400 },
    );
  }

  const referenceId = `DESK-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  await forwardWebhook("contact", {
    referenceId,
    name,
    email,
    subject,
    message,
  });

  return NextResponse.json({ ok: true, referenceId });
}
