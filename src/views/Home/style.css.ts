import { style } from "@vanilla-extract/css";

export const wrapperClass = style({
  width: "100%",
});

export const internalWrapperClass = style({
  position: "relative",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "auto",
  padding: 40,
  boxSizing: "border-box",

  maxWidth: 896,
  "@media": {
    "screen and (max-width: 1000px)": {
      maxWidth: 624,
    },
    "screen and (max-width: 660px)": {
      maxWidth: 443,
    },
    "screen and (max-width: 400px)": {
      maxWidth: 443,
    },
  },
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

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 120,
    },
    "screen and (max-width: 660px)": {
      fontSize: 80,
    },
    "screen and (max-width: 400px)": {
      fontSize: 70,
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

export const comingSoonClass = style({
  fontSize: 32,
  color: "#919597",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 32,
    },
    "screen and (max-width: 660px)": {
      fontSize: 24,
    },
    "screen and (max-width: 400px)": {
      fontSize: 24,
    },
  },
});

export const linksClass = style({
  fontSize: 18,
  color: "#a3a7a8",
  cursor: "none",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 18,
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
  fontSize: 12,
  color: "#b5b8ba",
  whiteSpace: "break-spaces",
  textAlign: "right",
  cursor: "none",
  textDecoration: "none",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 12,
    },
    "screen and (max-width: 660px)": {
      fontSize: 8,
    },
  },
});

export const footerWrapperClass = style({
  width: "100%",
});

export const internalFooterWrapperClass = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
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

export const phoneNumberWrapperClass = style({
  display: "flex",
  gap: 10,
});

export const comingSoonWrapperclass = style({
  width: 195,
  "@media": {
    "screen and (max-width: 660px)": {
      width: 145,
    },
  },
});

export const internalFooterItemWapperClass = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
