"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(true);
  }, []);

  return (
    <div
      id="ftco-loader"
      className={hidden ? "fullscreen" : "fullscreen show"}
      aria-hidden="true"
    >
      <svg className="circular" width="48px" height="48px">
        <circle
          className="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          stroke="#eeeeee"
        />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          stroke="#F96D00"
        />
      </svg>
    </div>
  );
}
