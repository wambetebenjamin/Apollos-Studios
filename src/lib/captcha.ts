declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

export function getRecaptchaSiteKey(): string {
  return (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "").trim();
}

export async function getRecaptchaToken(action: string): Promise<string | null> {
  if (typeof window === "undefined") return null;
  const siteKey = getRecaptchaSiteKey();
  if (!siteKey) return null;

  if (!scriptPromise) {
    scriptPromise = new Promise<void>((resolve, reject) => {
      if (window.grecaptcha) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
      document.head.appendChild(script);
    });
  }

  try {
    await scriptPromise;
    if (!window.grecaptcha) return null;
    return await new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(siteKey, { action })
          .then(resolve)
          .catch(reject);
      });
    });
  } catch {
    return null;
  }
}
