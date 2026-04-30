"use client";

import Image from "next/image";

import { iconClass, iconMirroredClass } from "./style.css";

type Props = {
  mirrored?: boolean;
};

export const ChevronIcon = ({ mirrored }: Props) => (
  <span className={mirrored ? iconMirroredClass : iconClass} aria-hidden>
    <Image src="/chevron.png" width={5} height={12} alt="" />
  </span>
);
