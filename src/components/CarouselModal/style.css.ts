import { style } from "@vanilla-extract/css";

export const backdropClass = style({
  position: "fixed",
  inset: 0,
  zIndex: 400,
  backgroundColor: "rgba(0, 0, 0, 0.94)",
  boxSizing: "border-box",
});

export const layoutClass = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "center",
  gap: 8,
  padding: "20px 56px 100px 56px",
  boxSizing: "border-box",
  pointerEvents: "none",
  width: "100%",
  height: "100dvh",
  minHeight: 0,
  "@media": {
    "screen and (max-width: 660px)": {
      padding: "12px 12px 88px 12px",
    },
  },
});

export const imageAreaClass = style({
  position: "relative",
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  maxWidth: "100%",
  height: "100%",
  pointerEvents: "auto",
});

export const imageFillClass = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center",
});

export const navButtonClass = style({
  flexShrink: 0,
  alignSelf: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  margin: 0,
  border: "none",
  borderRadius: 4,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#ffffff",
  fontSize: 28,
  lineHeight: 1,
  cursor: "pointer",
  pointerEvents: "auto",
  padding: 0,
  transition: "background-color 0.15s ease",
  "@media": {
    "screen and (max-width: 660px)": {
      width: 40,
      height: 40,
      fontSize: 22,
    },
  },
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

export const closeButtonClass = style({
  position: "fixed",
  top: 12,
  right: 12,
  zIndex: 410,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 44,
  height: 44,
  margin: 0,
  border: "none",
  borderRadius: 4,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#ffffff",
  fontSize: 28,
  lineHeight: 1,
  cursor: "pointer",
  pointerEvents: "auto",
  padding: 0,
  transition: "background-color 0.15s ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

export const modalCaptionClass = style({
  position: "fixed",
  left: 20,
  bottom: 20,
  zIndex: 410,
  maxWidth: "min(80%, 480px)",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  boxSizing: "border-box",
  pointerEvents: "none",
  "@media": {
    "screen and (max-width: 660px)": {
      left: 12,
      bottom: 12,
      maxWidth: "90%",
    },
  },
});
