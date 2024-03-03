import { style } from "@vanilla-extract/css";

const imagesSizes = {
  big: {
    width: { desktop: 896, notebook: 624, tablet: 350, phone: 320 },
    rationHeight: 5.75,
  },
  little: {
    width: { desktop: 100, notebook: 71, tablet: 50, phone: 50 },
    rationHeight: 5.56,
  },
};

export const wrapper = style({
  position: "relative",
  height: "100vh",
  display: "grid",
  gridAutoFlow: "column",
  margin: "auto",
  boxSizing: "border-box",

  padding: 40,
  gridTemplateRows: "1fr 208px 100px 74px 1fr 34px",
  maxWidth: imagesSizes.big.width.desktop + 80,
  "@media": {
    "screen and (max-width: 1000px)": {
      padding: 30,
      gridTemplateRows: "1fr 145px 100px 74px 1fr 34px",
      maxWidth: imagesSizes.big.width.notebook + 60,
    },
    "screen and (max-width: 660px)": {
      padding: 30,
      gridTemplateRows: "1fr 102px 100px 74px 1fr 101px",
      maxWidth: imagesSizes.big.width.tablet + 60,
    },
    "screen and (max-width: 400px)": {
      padding: 30,
      gridTemplateRows: "1fr 102px 100px 74px 1fr 109px",
      maxWidth: imagesSizes.big.width.phone + 60,
    },
  },
});

export const externalImagesWrapperClass = style({
  height:
    imagesSizes.big.width.desktop / imagesSizes.big.rationHeight +
    imagesSizes.little.width.desktop / imagesSizes.little.rationHeight,
  width: imagesSizes.big.width.desktop,
  "@media": {
    "screen and (max-width: 1000px)": {
      height:
        imagesSizes.big.width.notebook / imagesSizes.big.rationHeight +
        imagesSizes.little.width.notebook / imagesSizes.little.rationHeight,
      width: imagesSizes.big.width.notebook,
    },
    "screen and (max-width: 660px)": {
      height:
        imagesSizes.big.width.tablet / imagesSizes.big.rationHeight +
        imagesSizes.little.width.tablet / imagesSizes.little.rationHeight,
      width: imagesSizes.big.width.tablet,
    },
    "screen and (max-width: 400px)": {
      height:
        imagesSizes.big.width.phone / imagesSizes.big.rationHeight +
        imagesSizes.little.width.phone / imagesSizes.little.rationHeight,
      width: imagesSizes.big.width.phone,
    },
  },
});

export const imagesWrapperClass = style({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
});

export const bigImageClass = style({
  height: imagesSizes.big.width.desktop / imagesSizes.big.rationHeight,
  width: imagesSizes.big.width.desktop,
  "@media": {
    "screen and (max-width: 1000px)": {
      height: imagesSizes.big.width.notebook / imagesSizes.big.rationHeight,
      width: imagesSizes.big.width.notebook,
    },
    "screen and (max-width: 660px)": {
      height: imagesSizes.big.width.tablet / imagesSizes.big.rationHeight,
      width: imagesSizes.big.width.tablet,
    },
    "screen and (max-width: 400px)": {
      height: imagesSizes.big.width.phone / imagesSizes.big.rationHeight,
      width: imagesSizes.big.width.phone,
    },
  },
});

export const littleImageClass = style({
  height: imagesSizes.little.width.desktop / imagesSizes.little.rationHeight,
  width: imagesSizes.little.width.desktop,
  marginTop: 10,
  "@media": {
    "screen and (max-width: 1000px)": {
      height:
        imagesSizes.little.width.notebook / imagesSizes.little.rationHeight,
      width: imagesSizes.little.width.notebook,
      marginTop: 8,
    },
    "screen and (max-width: 660px)": {
      height: imagesSizes.little.width.tablet / imagesSizes.little.rationHeight,
      width: imagesSizes.little.width.tablet,
      marginTop: 6,
    },
    "screen and (max-width: 400px)": {
      height: imagesSizes.little.width.phone / imagesSizes.little.rationHeight,
      width: imagesSizes.little.width.phone,
    },
  },
});

export const comingSoonWrapperclass = style({
  width: 193,
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
  fontSize: 16,
  color: "#a3a7a8",
  cursor: "none",

  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: 16,
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
