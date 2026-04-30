"use client";

import { DownloadChevronsGroup } from "@/components/DownloadChevronsGroup/DownloadChevronsGroup";

import { linkLabelClass, linkLayoutClass } from "./style.css";

type Props = {
  href: string;
  linkClassName: string;
  id?: string;
  label: string;
};

export const DownloadPortfolioRow = ({
  href,
  linkClassName,
  id,
  label,
}: Props) => (
  <a
    className={`${linkLayoutClass} ${linkClassName}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    id={id}
  >
    <DownloadChevronsGroup />
    <span className={linkLabelClass}>{label}</span>
    <DownloadChevronsGroup mirrored />
  </a>
);
