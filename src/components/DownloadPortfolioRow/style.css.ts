import { style } from "@vanilla-extract/css";

export const linkLayoutClass = style({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  boxSizing: "border-box",
  lineHeight: 1.2,
});

export const linkLabelClass = style({
  alignSelf: "center",
  lineHeight: 1.2,
  font: "inherit",
});
