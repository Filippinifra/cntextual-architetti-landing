import { style } from "@vanilla-extract/css";

export const iconClass = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 0,
  userSelect: "none",
  flexShrink: 0,
  pointerEvents: "none",
  filter: "brightness(0) invert(1)",
});

export const iconMirroredClass = style([
  iconClass,
  {
    transform: "scaleX(-1)",
  },
]);
