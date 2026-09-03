export default function Loading() {
  return (
    <div className="loading-skeleton" style={{ minHeight: "60vh", padding: "80px 20px" }}>
      <div className="container-fluid">
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div className="skeleton-line skeleton-kicker" />
          <div className="skeleton-line skeleton-h1" />
          <div className="skeleton-line skeleton-text" />
          <div className="skeleton-line skeleton-text short" />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 32 }}>
            <div className="skeleton-line skeleton-btn" />
            <div className="skeleton-line skeleton-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}
