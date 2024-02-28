import { style } from "@vanilla-extract/css";

export const cursorClass = style({
  position: "fixed",
  borderRadius: "50%",
  mixBlendMode: "screen",
  pointerEvents: "none",
  transform: "translate(-50%, -50%)",
  zIndex: "999999 !important",
  transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
  border: "1px solid lightgrey",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#3a3b3c",

  "@media": {
    "screen and (max-width: 768px)": {
      width: 0,
      height: 0,
      transition:
        "width 0.2s ease-in-out, height 0.2s ease-in-out, opacity 0.2s ease-in-out",
    },
  },
});

export const pointerClass = style({
  border: "1px solid blue",
  color: "blue",
});
