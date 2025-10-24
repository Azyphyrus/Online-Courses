"use client";
import { useState } from "react";

export default function DisclaimerBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        padding: "10px",
        textAlign: "center",
        borderTop: "1px solid #f5c6cb",
        zIndex: 9999,
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9em" }}>
        This website is a mock-up created for educational and demonstration purposes only. 
        No real products or services are being sold.
      </p>
      <button
        onClick={() => setVisible(false)}
        style={{
          marginLeft: "10px",
          background: "transparent",
          border: "none",
          color: "#721c24",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
}
