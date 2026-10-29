import type { NextRequest } from "next/server";

const buckets = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 8;

export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return req.headers.get("x-real-ip") || "unknown";
}

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const entry = buckets.get(key);
  if (!entry || now > entry.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSec: 0 };
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }
  entry.count += 1;
  return { allowed: true, retryAfterSec: 0 };
}

export function cleanText(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, maxLen);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 180;
}

export async function verifyRecaptchaToken(
  token: string | null | undefined,
  remoteIp: string,
): Promise<{ ok: boolean; reason?: string }> {
  const secret = (process.env.RECAPTCHA_SECRET_KEY || "").trim();
  if (!secret) {
    return { ok: true };
  }
  if (!token) {
    return { ok: false, reason: "Security check token missing. Please refresh and try again." };
  }
  try {
    const body = new URLSearchParams({
      secret,
      response: token,
      remoteip: remoteIp,
    });
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!res.ok) {
      return { ok: false, reason: "Unable to verify security check right now." };
    }
    const data = (await res.json()) as { success?: boolean; score?: number };
    if (!data.success) {
      return { ok: false, reason: "Security verification did not pass." };
    }
    if (typeof data.score === "number" && data.score < 0.35) {
      return { ok: false, reason: "Automated submission detected." };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: "Security verification service unavailable." };
  }
}

export async function forwardWebhook(kind: "contact" | "list-space", payload: Record<string, unknown>): Promise<void> {
  const url = (process.env.FORMS_WEBHOOK_URL || "").trim();
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "apollos-studios",
        kind,
        submittedAt: new Date().toISOString(),
        payload,
      }),
    });
  } catch {
    // Non-blocking webhook forwarding
  }
}
