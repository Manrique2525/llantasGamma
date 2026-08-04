import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: "#7CAD2B",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Llantas Gama
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#FFFFFF",
            marginTop: 24,
            textAlign: "center",
            paddingLeft: 48,
            paddingRight: 48,
          }}
        >
          Llantera multimarca en Villahermosa, Tabasco
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#A8A8A8",
            marginTop: 40,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Auto · Camión · Agrícola · Industrial
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#FFFFFF",
            marginTop: 16,
          }}
        >
          WhatsApp 993 398 7711
        </div>
      </div>
    ),
    { ...size }
  );
}
