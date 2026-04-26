import localFont from "next/font/local";

export const helveticaNowText = localFont({
  src: [
    {
      path: "../font/helv-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/helv-regita.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/helv-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});
