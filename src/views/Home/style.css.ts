import { style } from "@vanilla-extract/css";

const maxContentWidth = 896 + 80;

export const wrapper = style({
  position: "relative",
  height: "100%",
  display: "grid",
  gridAutoFlow: "column",
  margin: "auto",
  boxSizing: "border-box",

  paddingTop: 96,
  paddingBottom: 96,
  paddingLeft: 40,
  paddingRight: 40,
  gridTemplateRows: "1fr 75vh 100px 74px 1fr 34px",
  maxWidth: maxContentWidth,
  "@media": {
    "screen and (max-width: 1000px)": {
      paddingTop: 96,
      paddingBottom: 96,
      paddingLeft: 30,
      paddingRight: 30,
      maxWidth: 624 + 60,
    },
    "screen and (max-width: 660px)": {
      paddingTop: 96,
      paddingBottom: 96,
      paddingLeft: 30,
      paddingRight: 30,
      gridTemplateRows: "1fr 75vh 100px 74px 1fr 101px",
      maxWidth: 350 + 60,
    },
    "screen and (max-width: 400px)": {
      paddingTop: 96,
      paddingBottom: 96,
      paddingLeft: 30,
      paddingRight: 30,
      gridTemplateRows: "1fr 75vh 100px 74px 1fr 109px",
      maxWidth: 320 + 60,
    },
  },
});

export const externalImagesWrapperClass = style({
  position: "relative",
  width: "100%",
  height: "75vh",
  minHeight: "75vh",
  maxHeight: "75vh",
  alignSelf: "stretch",
  overflow: "hidden",
});

export const imagesWrapperClass = style({
  position: "absolute",
  inset: 0,
  display: "block",
  backgroundColor: "white",
});

export const carouselImageClass = style({
  objectFit: "cover",
  objectPosition: "center",
});

export const comingSoonWrapperclass = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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
