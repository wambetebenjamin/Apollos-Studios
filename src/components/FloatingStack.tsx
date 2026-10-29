"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { site, whatsappLink, type Locale } from "@/lib/data/site";
import {
  getVoiceScript,
  getVoiceTourOrder,
  normalizeVoicePath,
} from "@/lib/data/voices";
import { useI18n } from "./I18nProvider";

type SpeechState = "ready" | "playing" | "paused" | "unsupported";

declare global {
  interface Window {
    __apollosActiveUtterance?: SpeechSynthesisUtterance | null;
  }
}

export function FloatingStack() {
  const pathname = usePathname() || "/";
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<SpeechState>("ready");
  const [speakingPath, setSpeakingPath] = useState<string>("/");

  const sessionIdRef = useRef(0);
  const tourActiveRef = useRef(false);
  const spokenPathsRef = useRef<Set<string>>(new Set());
  const queueRef = useRef<string[]>([]);
  const latestPathRef = useRef<string>(normalizeVoicePath(pathname));
  const latestLocaleRef = useRef<Locale>(locale);
  const prevLocaleRef = useRef<Locale>(locale);

  // Track current route WITHOUT cancelling speech when user navigates between pages
  useEffect(() => {
    latestPathRef.current = normalizeVoicePath(pathname);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setStatus("unsupported");
      return;
    }
    return () => {
      sessionIdRef.current += 1;
      tourActiveRef.current = false;
      window.speechSynthesis.cancel();
      window.__apollosActiveUtterance = null;
    };
  }, []);

  const speakSegment = useCallback(
    (targetPath: string, targetLocale: Locale) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        setStatus("unsupported");
        return;
      }

      const synth = window.speechSynthesis;
      const mySession = ++sessionIdRef.current;

      synth.cancel();

      const normalized = normalizeVoicePath(targetPath);
      spokenPathsRef.current.add(normalized);
      setSpeakingPath(normalized);

      const script = getVoiceScript(normalized, targetLocale);
      const utter = new SpeechSynthesisUtterance(script);
      utter.lang =
        targetLocale === "fr"
          ? "fr-FR"
          : targetLocale === "sw"
            ? "sw-KE"
            : site.voice.lang;
      utter.rate = site.voice.rate;
      utter.pitch = site.voice.pitch;

      utter.onend = () => {
        if (sessionIdRef.current !== mySession) return;
        if (!tourActiveRef.current) {
          window.__apollosActiveUtterance = null;
          setStatus("ready");
          return;
        }

        // If user navigated to a page not yet narrated in this tour, narrate it next seamlessly
        const currentRoute = latestPathRef.current;
        if (!spokenPathsRef.current.has(currentRoute)) {
          queueRef.current = queueRef.current.filter((p) => p !== currentRoute);
          speakSegment(currentRoute, latestLocaleRef.current);
          return;
        }

        // Otherwise advance through the remaining site tour segments
        const nextPath = queueRef.current.find(
          (p) => !spokenPathsRef.current.has(p),
        );
        if (nextPath) {
          queueRef.current = queueRef.current.filter((p) => p !== nextPath);
          speakSegment(nextPath, latestLocaleRef.current);
        } else {
          tourActiveRef.current = false;
          window.__apollosActiveUtterance = null;
          setStatus("ready");
        }
      };

      utter.onerror = (ev) => {
        if (sessionIdRef.current !== mySession) return;
        if (ev.error === "canceled" || ev.error === "interrupted") return;
        tourActiveRef.current = false;
        window.__apollosActiveUtterance = null;
        setStatus("ready");
      };

      // Prevent Chromium/WebKit garbage-collecting active utterance mid-narration
      window.__apollosActiveUtterance = utter;
      synth.speak(utter);
      setStatus("playing");
    },
    [],
  );

  // Keep speech alive if user switches language mid-tour; otherwise update locale ref
  useEffect(() => {
    latestLocaleRef.current = locale;
    if (prevLocaleRef.current !== locale) {
      prevLocaleRef.current = locale;
      if (tourActiveRef.current && status === "playing") {
        const order = getVoiceTourOrder(latestPathRef.current);
        spokenPathsRef.current = new Set();
        queueRef.current = order.slice(1);
        speakSegment(order[0], locale);
      } else if (status === "paused" && typeof window !== "undefined" && "speechSynthesis" in window) {
        sessionIdRef.current += 1;
        tourActiveRef.current = false;
        window.speechSynthesis.cancel();
        window.__apollosActiveUtterance = null;
        setStatus("ready");
      }
    }
  }, [locale, speakSegment, status]);

  const stopSpeech = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    sessionIdRef.current += 1;
    tourActiveRef.current = false;
    spokenPathsRef.current.clear();
    queueRef.current = [];
    window.speechSynthesis.cancel();
    window.__apollosActiveUtterance = null;
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

    tourActiveRef.current = true;
    spokenPathsRef.current = new Set();
    const order = getVoiceTourOrder(latestPathRef.current);
    queueRef.current = order.slice(1);
    speakSegment(order[0], latestLocaleRef.current);
  }, [speakSegment, status]);

  const readCurrentPageNow = useCallback(() => {
    tourActiveRef.current = true;
    const current = latestPathRef.current;
    const order = getVoiceTourOrder(current);
    spokenPathsRef.current = new Set();
    queueRef.current = order.slice(1);
    speakSegment(current, latestLocaleRef.current);
  }, [speakSegment]);

  const pauseSpeech = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const synth = window.speechSynthesis;
    if (synth.speaking && !synth.paused) {
      synth.pause();
      setStatus("paused");
    }
  }, []);

  const normalizedCurrent = normalizeVoicePath(pathname);
  const canSwitchToCurrentPage =
    status === "playing" && speakingPath !== normalizedCurrent;

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
              onClick={() => setOpen(false)}
              aria-label="Minimize audio guide"
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
          <p
            className="mb-2"
            style={{ fontSize: "12px", fontWeight: 600, color: "#000" }}
          >
            {statusText}
          </p>
          <div className="d-flex flex-wrap" style={{ gap: "8px" }}>
            <button
              type="button"
              className="btn btn-primary btn-sm py-2 px-3"
              onClick={playSpeech}
              disabled={status === "unsupported" || status === "playing"}
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
            {canSwitchToCurrentPage ? (
              <button
                type="button"
                className="btn btn-outline-dark btn-sm py-2 px-3"
                onClick={readCurrentPageNow}
              >
                {t("voice.readCurrent")}
              </button>
            ) : null}
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
        {status === "playing" ? (
          <span className="ws-fab__live-dot" aria-hidden="true" />
        ) : null}
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
