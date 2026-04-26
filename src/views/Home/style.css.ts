import { style } from "@vanilla-extract/css";

const maxContentWidth = 896 + 80;

export const mainClass = style({
  maxWidth: maxContentWidth,
  margin: "auto",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 32,
  boxSizing: "border-box",
  width: "100%",
  height: "100dvh",
  maxHeight: "100dvh",
  minHeight: 0,
  paddingTop: 32,
  paddingBottom: 32,
  paddingLeft: 20,
  paddingRight: 20,
  overflow: "hidden",
});

export const wrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
  width: "100%",
  minWidth: 0,
  minHeight: 0,
  flex: "0 0 25dvh",
  overflow: "auto",
  alignSelf: "stretch",
});

export const externalImagesWrapperClass = style({
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  minWidth: 0,
  minHeight: 0,
  flex: "1 1 0%",
  overflow: "hidden",
});

export const imagesWrapperClass = style({
  position: "absolute",
  inset: 0,
  display: "block",
  minWidth: 0,
  minHeight: 0,
  backgroundColor: "white",
  isolation: "isolate",
  cursor: "pointer",
});

export const carouselImageClass = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const carouselCaptionClass = style({
  position: "absolute",
  left: 12,
  bottom: 12,
  zIndex: 2,
  maxWidth: "min(80%, 420px)",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  boxSizing: "border-box",
  pointerEvents: "none",
  "@media": {
    "screen and (max-width: 660px)": {
      left: 8,
      bottom: 8,
      maxWidth: "90%",
    },
  },
});

export const carouselCaptionTitleClass = style({
  margin: 0,
  color: "#ffffff",
  fontSize: 15,
  fontWeight: 700,
  lineHeight: 1.25,
  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 13,
    },
    "screen and (max-width: 400px)": {
      fontSize: 12,
    },
  },
});

export const carouselCaptionSubtitleClass = style({
  margin: 0,
  color: "rgba(255, 255, 255, 0.95)",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.25,
  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 12,
    },
    "screen and (max-width: 400px)": {
      fontSize: 11,
    },
  },
});

export const carouselLogoOverlayClass = style({
  position: "absolute",
  inset: 0,
  zIndex: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  padding: 16,
  boxSizing: "border-box",
});

export const carouselOverlayLogoImageClass = style({
  display: "block",
  width: "50%",
  height: "auto",
  flexShrink: 0,
  objectFit: "contain",
  objectPosition: "center",
  filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 6px 24px rgba(0, 0, 0, 0.28))",
});

export const comingSoonWrapperclass = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexShrink: 0,
});

export const bachecaAndInstagramTopWrapperClass = style({
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: 1,
  paddingRight: 2,
});

export const bachecaAndInstagramBottomWrapperClass = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  gap: 8,
});

export const footerWrapperClass = style({
  width: "100%",
  display: "flex",
  minHeight: 0,
  flexShrink: 0,
});

export const internalFooterWrapperClass = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyContent: "space-between",
  width: "100%",
  gap: 8,

  "@media": {
    "screen and (max-width: 660px)": {
      display: "flex",
      gap: 12,
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  },
});

export const phoneNumberWrapperClass = style({
  display: "flex",
  gap: 10,

  "@media": {
    "screen and (max-width: 660px)": {
      display: "block",
    },
  },
});

export const internalFooterItemWapperClass = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const linksClass = style({
  fontSize: 18,
  color: "#a3a7a8",
  cursor: "none",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 15,
    },
    "screen and (max-width: 660px)": {
      fontSize: 12,
    },
    "screen and (max-width: 400px)": {
      fontSize: 12,
    },
  },
});

export const footerTextClass = style({
  fontSize: 13,
  fontStyle: "italic",
  color: "#b5b8ba",
  whiteSpace: "break-spaces",
  textAlign: "right",
  cursor: "none",
  textDecoration: "none",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 10,
    },
    "screen and (max-width: 660px)": {
      fontSize: 12,
    },
    "screen and (max-width: 400px)": {
      fontSize: 12,
    },
  },
});

export const removeOnTableClass = style({
  "@media": {
    "screen and (max-width: 660px)": {
      display: "none",
    },
  },
});

export const addOnTableClass = style({
  "@media": {
    "screen and (min-width: 661px)": {
      display: "none",
    },
  },
});
