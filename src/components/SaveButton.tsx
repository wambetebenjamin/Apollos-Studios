"use client";

import { useI18n } from "./I18nProvider";
import { useSaved } from "./SavedProvider";

export function SaveButton({
  slug,
  spaceName,
}: {
  slug: string;
  spaceName: string;
}) {
  const { hydrated, isSaved, toggleSaved } = useSaved();
  const { t } = useI18n();
  const active = hydrated && isSaved(slug);

  return (
    <button
      type="button"
      className={`ws-save-btn${active ? " is-saved" : ""}`}
      aria-pressed={active}
      aria-label={
        active
          ? `Remove ${spaceName} from saved spaces`
          : `Save ${spaceName} in this browser`
      }
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSaved(slug);
      }}
    >
      <span
        className={active ? "icon-bookmark" : "icon-bookmark-o"}
        aria-hidden="true"
      />
      <span>{active ? t("save.saved") : t("save.save")}</span>
    </button>
  );
}
