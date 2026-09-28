import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/resume";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#08080c",
          backgroundImage:
            "linear-gradient(135deg, #312e81 0%, #08080c 55%, #3b0764 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #6366f1, #d946ef)",
              color: "white",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            {personalInfo.initials}
          </div>
          <div
            style={{
              display: "flex",
              color: "#a5b4fc",
              fontSize: 26,
              fontFamily: "monospace",
              letterSpacing: 2,
            }}
          >
            PORTFOLIO
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          {personalInfo.name}
        </div>
        <div style={{ display: "flex", color: "#e2e8f0", fontSize: 34 }}>
          {personalInfo.role}
        </div>
        <div
          style={{
            display: "flex",
            color: "#818cf8",
            fontSize: 28,
            fontFamily: "monospace",
            marginTop: 16,
          }}
        >
          {personalInfo.focus}
        </div>
      </div>
    ),
    { ...size }
  );
}
