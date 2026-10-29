export default function Loading() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "55vh", padding: "3rem 1rem" }}
      role="status"
      aria-live="polite"
    >
      <div className="text-center">
        <svg width="44" height="44" viewBox="0 0 48 48" aria-hidden="true">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="#fcd307"
            strokeWidth="4"
          />
        </svg>
        <p className="mt-2 mb-0" style={{ fontSize: "13px", fontWeight: 600, color: "#333" }}>
          Loading studio directory...
        </p>
      </div>
    </div>
  );
}
