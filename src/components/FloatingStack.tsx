"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { site, whatsappLink } from "@/lib/data/site";
import { getVoiceScript } from "@/lib/data/voices";
import { useI18n } from "./I18nProvider";

type SpeechState = "ready" | "playing" | "paused" | "unsupported";

export function FloatingStack() {
  const pathname = usePathname() || "/";
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<SpeechState>("ready");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setStatus("unsupported");
      return;
    }
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setStatus("ready");
    }
  }, [pathname, locale]);

  const stopSpeech = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setStatus("ready");
  }, []);

  const playSpeech = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setStatus("unsupported");
      return;
    }
    const synth = window.speechSynthesis;
    if (status === "paused" && synth.paused) {
      synth.resume();
      setStatus("playing");
      return;
    }
    synth.cancel();
    const script = getVoiceScript(pathname, locale);
    const utter = new SpeechSynthesisUtterance(script);
    utter.lang =
      locale === "fr" ? "fr-FR" : locale === "sw" ? "sw-KE" : site.voice.lang;
    utter.rate = site.voice.rate;
    utter.pitch = site.voice.pitch;
    utter.onend = () => setStatus("ready");
    utter.onerror = () => setStatus("ready");
    utteranceRef.current = utter;
    synth.speak(utter);
    setStatus("playing");
  }, [locale, pathname, status]);

  const pauseSpeech = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (synth.speaking && !synth.paused) {
      synth.pause();
      setStatus("paused");
    }
  }, []);

  const statusText =
    status === "unsupported"
      ? t("voice.statusUnsupported")
      : status === "playing"
        ? t("voice.statusPlaying")
        : status === "paused"
          ? t("voice.statusPaused")
          : t("voice.statusReady");

  return (
    <div className="ws-floating-stack" aria-label="Quick help and voice guide">
      {open ? (
        <div
          className="ws-voice-popover"
          role="dialog"
          aria-label={t("voice.tourTitle")}
        >
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h3 className="mb-0">{t("voice.tourTitle")}</h3>
            <button
              type="button"
              onClick={() => {
                stopSpeech();
                setOpen(false);
              }}
              aria-label="Close audio guide"
              style={{
                background: "transparent",
                border: 0,
                cursor: "pointer",
                padding: "4px 8px",
                fontSize: "16px",
              }}
            >
              <span className="icon-close" aria-hidden="true" />
            </button>
          </div>
          <p>{t("voice.tourIntro")}</p>
          <p className="mb-2" style={{ fontSize: "12px", fontWeight: 600, color: "#000" }}>
            {statusText}
          </p>
          <div className="d-flex flex-wrap" style={{ gap: "8px" }}>
            <button
              type="button"
              className="btn btn-primary btn-sm py-2 px-3"
              onClick={playSpeech}
              disabled={status === "unsupported"}
            >
              <span className="icon-play mr-1" aria-hidden="true" />{" "}
              {t("cta.play")}
            </button>
            <button
              type="button"
              className="btn btn-black btn-sm py-2 px-3"
              onClick={pauseSpeech}
              disabled={status !== "playing"}
            >
              <span className="icon-pause mr-1" aria-hidden="true" />{" "}
              {t("cta.pause")}
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-sm py-2 px-3"
              onClick={stopSpeech}
              disabled={status === "ready" || status === "unsupported"}
            >
              <span className="icon-stop mr-1" aria-hidden="true" />{" "}
              {t("cta.stop")}
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className={`ws-fab ws-fab--voice${status === "playing" ? " is-speaking" : ""}`}
        aria-label={t("voice.tourTitle")}
        aria-expanded={open}
        title={t("voice.tourTitle")}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="icon-volume-up" aria-hidden="true" />
      </button>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="ws-fab ws-fab--whatsapp"
        aria-label="Message Apollos Studios desk on WhatsApp"
        title="WhatsApp Desk"
      >
        <span className="icon-whatsapp" aria-hidden="true" />
      </a>
    </div>
  );
}
