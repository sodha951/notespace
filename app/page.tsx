export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fb",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "85%",
          height: "85%",
          border: "1px solid #ddd",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: "6px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ---------- Top Bar ---------- */}
        <div
          style={{
            backgroundColor: "#fafafa",
            borderBottom: "1px solid #eee",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                color: "#c27ad8",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              🕊
            </span>
            <span
              style={{
                color: "#777",
                fontFamily: "Georgia, serif",
                fontSize: "17px",
              }}
            >
              notespace
            </span>
          </div>

          {/* Right Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={iconStyle}>＋</span>
            <span style={iconStyle}>🔒</span>
            <span style={iconStyle}>✏️</span>
            <span style={iconStyle}>👤</span>
            <span style={textIconStyle}>SP</span>
            <span style={textIconStyle}>MO</span>
            <span style={iconStyle}>💡</span>
            <span style={iconStyle}>⚙️</span>
            <button
              style={{
                backgroundColor: "#e7b3f3",
                border: "none",
                borderRadius: "4px",
                padding: "4px 10px",
                color: "#fff",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Remove Ads
            </button>
          </div>
        </div>

        {/* ---------- Text Area ---------- */}
        <div style={{ position: "relative", flex: 1 }}>
          <textarea
            placeholder=""
            style={{
              width: "100%",
              height: "100%",
              padding: "16px",
              border: "none",
              outline: "none",
              fontSize: "15px",
              resize: "none",
              fontFamily: "monospace",
              color: "#333",
            }}
          ></textarea>

          {/* ---------- Bottom Right Small Toolbar ---------- */}
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              right: "16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <button style={miniButton}>↗</button>
            <button style={miniButton}>＋</button>
            <button style={miniButton}>－</button>
            <button style={miniButton}>Raw</button>
            <button style={miniButton}>MarkDown</button>
            <button style={miniButton}>Code</button>
          </div>
        </div>

        {/* ---------- Middle Bottom Toolbar (UPDATED) ---------- */}
        <div
          style={{
            borderTop: "1px solid #eee",
            padding: "8px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fafafa",
            fontSize: "13px",
            color: "#777",
          }}
        >
          {/* Words / Chars Counter */}
          <div
            style={{
              fontSize: "12px",
              color: "#888",
              marginBottom: "6px",
              textAlign: "center",
            }}
          >
            <span>Words: 0</span>
            <span style={{ margin: "0 4px" }}>|</span>
            <span>Chars: 0</span>
          </div>

          {/* Editable & Share Links Below */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button style={linkButton}>🔗 Editable Link</button>
            <button style={linkButton}>↗ Share Link</button>
          </div>
        </div>

        {/* ---------- Footer ---------- */}
        <div
          style={{
            backgroundColor: "#f3f4f6",
            borderTop: "1px solid #ddd",
            textAlign: "center",
            padding: "8px",
            fontSize: "13px",
            color: "#777",
            display: "flex",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <span>Privacy</span>
          <span>–</span>
          <span>Terms</span>
          <span>–</span>
          <span>Contact Us</span>
          <span>–</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Styles ---------- */
const iconStyle = {
  color: "#999",
  cursor: "pointer",
  fontSize: "15px",
};

const textIconStyle = {
  color: "#999",
  fontSize: "14px",
  cursor: "pointer",
  fontWeight: "500",
};

const linkButton = {
  background: "#f8f8f8",
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "4px 10px",
  fontSize: "12px",
  color: "#666",
  cursor: "pointer",
};

const miniButton = {
  background: "#f6f6f6",
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "2px 8px",
  fontSize: "12px",
  color: "#999",
  cursor: "pointer",
};
