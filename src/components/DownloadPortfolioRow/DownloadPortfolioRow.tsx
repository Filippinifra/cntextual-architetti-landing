"use client";

import { DownloadChevronsGroup } from "@/components/DownloadChevronsGroup/DownloadChevronsGroup";

import { linkLabelClass, linkLayoutClass } from "./style.css";

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
    <DownloadChevronsGroup />
    <span className={linkLabelClass}>{label}</span>
    <DownloadChevronsGroup mirrored />
  </a>
);
