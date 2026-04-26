"use client";

import { downloadChevronsFont } from "@/fonts/downloadChevronsFont";
import {
  chevronInnerClass,
  chevronMidClass,
  chevronOuterClass,
  groupClass,
  linkLabelClass,
  linkLayoutClass,
} from "./style.css";

type Props = {
  href: string;
  download: string;
  linkClassName: string;
  id?: string;
  label: string;
};

export const DownloadPortfolioRow = ({
  href,
  download: downloadName,
  linkClassName,
  id,
  label,
}: Props) => (
  <a
    className={`${linkLayoutClass} ${linkClassName}`}
    href={href}
    download={downloadName}
    id={id}
  >
    <span
      className={`${groupClass} ${downloadChevronsFont.className}`}
      aria-hidden
    >
      <span className={chevronOuterClass}>›</span>
      <span className={chevronMidClass}>›</span>
      <span className={chevronInnerClass}>›</span>
    </span>
    <span className={linkLabelClass}>{label}</span>
    <span
      className={`${groupClass} ${downloadChevronsFont.className}`}
      aria-hidden
    >
      <span className={chevronInnerClass}>‹</span>
      <span className={chevronMidClass}>‹</span>
      <span className={chevronOuterClass}>‹</span>
    </span>
  </a>
);
