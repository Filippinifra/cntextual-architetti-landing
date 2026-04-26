"use client";

import Image from "next/image";

import {
  chevronImageClass,
  chevronInnerClass,
  chevronMidClass,
  chevronOuterClass,
  groupClass,
  groupMirroredClass,
} from "./style.css";

type Props = {
  mirrored?: boolean;
};

export const DownloadChevronsGroup = ({ mirrored }: Props) => {
  const wrapClass = mirrored ? groupMirroredClass : groupClass;
  return (
    <span className={wrapClass} aria-hidden>
      <span className={chevronOuterClass}>
        <Image
          className={chevronImageClass}
          src="/chevron.png"
          width={12}
          height={28}
          alt=""
        />
      </span>
      <span className={chevronMidClass}>
        <Image
          className={chevronImageClass}
          src="/chevron.png"
          width={12}
          height={28}
          alt=""
        />
      </span>
      <span className={chevronInnerClass}>
        <Image
          className={chevronImageClass}
          src="/chevron.png"
          width={12}
          height={28}
          alt=""
        />
      </span>
    </span>
  );
};
