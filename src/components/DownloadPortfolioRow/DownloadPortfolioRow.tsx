"use client";

import {
  chevronInnerClass,
  chevronMidClass,
  chevronOuterClass,
  groupClass,
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
    <span className={groupClass} aria-hidden>
      <span className={chevronOuterClass}>›</span>
      <span className={chevronMidClass}>›</span>
      <span className={chevronInnerClass}>›</span>
    </span>
    {label}
    <span className={groupClass} aria-hidden>
      <span className={chevronInnerClass}>‹</span>
      <span className={chevronMidClass}>‹</span>
      <span className={chevronOuterClass}>‹</span>
    </span>
  </a>
);
