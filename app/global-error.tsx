"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 20px" }}>
      <div>
        <div style={{ fontSize: 64, marginBottom: 16 }}>⚠️</div>
        <h2 style={{ fontFamily: "'Lora', Georgia, serif", color: "#00703c", fontSize: 28, marginBottom: 12 }}>
          Something went wrong
        </h2>
        <p style={{ color: "#666", fontSize: 16, marginBottom: 24, maxWidth: 420, margin: "0 auto 24px" }}>
          We hit an unexpected error. Please try again or contact our Kumasi team.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button onClick={reset} className="btn primary">
            Try Again
          </button>
          <a href="/contact" className="btn secondary" style={{ color: "#00703c", borderColor: "#00703c" }}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
