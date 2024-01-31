import { style } from "@vanilla-extract/css";

export const wrapperClass = style({
  width: "100%",
});

export const internalWrapperClass = style({
  position: "relative",
  maxWidth: 800,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "auto",
  padding: 40,
  boxSizing: "border-box",
});

export const typographyWithBgWrapperClass = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const typographyWithBgClass = style({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "inline-block",
  backgroundClip: "text",
  color: "transparent",

  textAlign: "right",
  whiteSpace: "pre-line",
});

export const titleClass = style({
  fontWeight: 600,
  fontSize: 180,
  lineHeight: "100px",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 120,
      lineHeight: "80px",
    },
    "screen and (max-width: 660px)": {
      fontSize: 80,
      lineHeight: "60px",
    },
    "screen and (max-width: 400px)": {
      fontSize: 70,
      lineHeight: "60px",
    },
  },
});

export const subtitleClass = style({
  fontWeight: 500,
  fontSize: 28,
  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 24,
    },
    "screen and (max-width: 660px)": {
      fontSize: 20,
    },
    "screen and (max-width: 400px)": {
      fontSize: 18,
    },
  },
});

export const mediumTextClass = style({
  fontSize: 26,
  fontWeight: 600,
  color: "darkgrey",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 20,
    },
    "screen and (max-width: 660px)": {
      fontSize: 18,
    },
    "screen and (max-width: 400px)": {
      fontSize: 16,
    },
  },
});

export const footerWrapperClass = style({
  width: "100%",
});

export const internalFooterWrapperClass = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: 8,

  "@media": {
    "screen and (max-width: 660px)": {
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  },
});

export const textClass = style({
  fontSize: 16,
  color: "darkgrey",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 14,
    },
    "screen and (max-width: 660px)": {
      fontSize: 12,
    },
  },
});

export const phoneNumberWrapperClass = style({
  display: "flex",
  flexDirection: "column",
});
