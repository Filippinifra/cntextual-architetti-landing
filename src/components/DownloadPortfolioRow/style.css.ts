import { keyframes, style } from "@vanilla-extract/css";

const DURATION = "2.5s";

const flowOuter = keyframes({
  "0%": { opacity: 0 },
  "2%": { opacity: 0.25 },
  "5%": { opacity: 0.45 },
  "10%": { opacity: 0.7 },
  "16%": { opacity: 0.9 },
  "20%": { opacity: 1 },
  "25%": { opacity: 0.65 },
  "30%": { opacity: 0.25 },
  "32%": { opacity: 0 },
  "100%": { opacity: 0 },
});

const flowMid = keyframes({
  "0%": { opacity: 0 },
  "2%": { opacity: 0 },
  "5%": { opacity: 0.1 },
  "10%": { opacity: 0.25 },
  "16%": { opacity: 0.5 },
  "20%": { opacity: 0.75 },
  "25%": { opacity: 0.95 },
  "28%": { opacity: 1 },
  "32%": { opacity: 0.45 },
  "36%": { opacity: 0.2 },
  "40%": { opacity: 0 },
  "100%": { opacity: 0 },
});

const flowInner = keyframes({
  "0%": { opacity: 0 },
  "2%": { opacity: 0 },
  "5%": { opacity: 0 },
  "10%": { opacity: 0.08 },
  "16%": { opacity: 0.2 },
  "22%": { opacity: 0.45 },
  "28%": { opacity: 0.7 },
  "32%": { opacity: 0.88 },
  "35%": { opacity: 1 },
  "40%": { opacity: 0.55 },
  "46%": { opacity: 0.22 },
  "50%": { opacity: 0.05 },
  "52%": { opacity: 0 },
  "100%": { opacity: 0 },
});

const chevronBase = style({
  display: "inline-block",
  lineHeight: 1,
  color: "inherit",
  fontSize: "1.55em",
  fontWeight: 300,
  userSelect: "none",
  "@media": {
    "screen and (max-width: 660px)": {
      fontSize: "1.4em",
    },
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
      opacity: 0.45,
    },
  },
});

const anim = (k: string) =>
  `${k} ${DURATION} cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite`;

export const chevronOuterClass = style([
  chevronBase,
  {
    animation: anim(flowOuter),
  },
]);
export const chevronMidClass = style([
  chevronBase,
  {
    animation: anim(flowMid),
  },
]);
export const chevronInnerClass = style([
  chevronBase,
  {
    animation: anim(flowInner),
  },
]);

export const linkLayoutClass = style({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  boxSizing: "border-box",
  "@media": {
    "screen and (max-width: 660px)": {
      gap: 7,
    },
  },
});

export const groupClass = style({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 3,
  pointerEvents: "none",
  "@media": {
    "screen and (max-width: 660px)": {
      gap: 2,
    },
  },
});
