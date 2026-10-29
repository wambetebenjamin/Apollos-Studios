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
  const limit = checkRateLimit(`list:${ip}`);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions right now. Please wait a few minutes and retry." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 });
  }

  // Honeypot trap
  if (cleanText(body.websiteUrl, 120)) {
    return NextResponse.json({ ok: true, referenceId: "AS-FILTERED" });
  }

  const spaceName = cleanText(body.spaceName, 120);
  const city = cleanText(body.city, 80);
  const neighbourhood = cleanText(body.neighbourhood, 120);
  const type = cleanText(body.type, 40);
  const rateBand = cleanText(body.rateBand, 40);
  const rateDisplay = cleanText(body.rateDisplay, 100);
  const capacity = cleanText(body.capacity, 80);
  const powerBackup = cleanText(body.powerBackup, 220);
  const gearSummary = cleanText(body.gearSummary, 1200);
  const houseRules = cleanText(body.houseRules, 800);
  const hostName = cleanText(body.hostName, 120);
  const contactEmail = cleanText(body.contactEmail, 160);
  const whatsapp = cleanText(body.whatsapp, 40);
  const areaSqm = cleanText(String(body.areaSqm ?? ""), 12);

  if (
    spaceName.length < 3 ||
    city.length < 2 ||
    neighbourhood.length < 2 ||
    rateDisplay.length < 3 ||
    capacity.length < 2 ||
    powerBackup.length < 4 ||
    gearSummary.length < 12 ||
    houseRules.length < 6 ||
    hostName.length < 2
  ) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required room, equipment, power and house-rule fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(contactEmail)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid host contact email address." },
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

  const referenceId = `AS-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  await forwardWebhook("list-space", {
    referenceId,
    spaceName,
    city,
    neighbourhood,
    type,
    rateBand,
    rateDisplay,
    areaSqm,
    capacity,
    powerBackup,
    amenities: Array.isArray(body.amenities) ? body.amenities.slice(0, 12) : [],
    gearSummary,
    houseRules,
    hostName,
    contactEmail,
    whatsapp,
  });

  return NextResponse.json({ ok: true, referenceId });
}
