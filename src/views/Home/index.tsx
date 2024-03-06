"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";
import {
  addOnTableClass,
  bachecaAndInstagramBottomWrapperClass,
  bachecaAndInstagramTopWrapperClass,
  bigImageClass,
  comingSoonClass,
  comingSoonWrapperclass,
  externalImagesWrapperClass,
  footerTextClass,
  footerWrapperClass,
  imagesWrapperClass,
  internalFooterItemWapperClass,
  internalFooterWrapperClass,
  linksClass,
  littleImageClass,
  phoneNumberWrapperClass,
  removeOnTableClass,
  wrapper,
} from "./style.css";

const fontMedium = localFont({
  src: "../../font/helv-medium.ttf",
});
const fontRegita = localFont({
  src: "../../font/helv-regita.ttf",
});
const fontRegular = localFont({
  src: "../../font/helv-regular.ttf",
});

const email = "info@cntextual.it";
const phones = [
  { phone: "+39 3319075460", name: "Christian Spolti" },
  { phone: "+39 3663193937", name: "Nicolò Mariani" },
];
const instagram = "cntextual";

const BachecaAndInstagram = () => {
  return (
    <>
      <a id="bacheca" className={`${linksClass} ${fontRegular.className}`}>
        bacheca
      </a>
      <a
        id="instagram"
        className={`${linksClass} ${fontRegular.className}`}
        target="_blank"
        href={`https://www.instagram.com/${instagram}/`}
        style={{ textDecoration: "none" }}
      >
        instagram
      </a>
    </>
  );
};

export const HomeView = () => {
  const [bgImageIndex, setBgImageIndex] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newIndex = bgImageIndex === 9 - 1 ? 0 : bgImageIndex + 1;
  //     setBgImageIndex(newIndex);
  //   }, 200);

  //   return () => clearInterval(interval);
  // }, [setBgImageIndex, bgImageIndex]);

  return (
    <main style={{ width: "100%", height: "100%" }}>
      <div className={wrapper}>
        {/* first spacer */}
        <div />
        <div className={externalImagesWrapperClass}>
          {[...Array(9)].map((e, i) => (
            <div
              key={`wrapper-images-${i}`}
              style={{ visibility: i === bgImageIndex ? "visible" : "hidden" }}
              className={imagesWrapperClass}
            >
              <Image
                alt={`subtitle-image-${i}`}
                src={`/carousel-text/C${i + 1}.png`}
                width={896}
                height={179}
                className={bigImageClass}
              />
              <Image
                alt={`title-image-${i}`}
                src={`/carousel-text/A${i + 1}.png`}
                width={100}
                height={29}
                className={littleImageClass}
              />
            </div>
          ))}
        </div>
        {/* second spacer */}
        <div />
        <div className={comingSoonWrapperclass}>
          <p className={`${comingSoonClass} ${fontMedium.className}`}>
            coming soon
          </p>
          <div
            className={`${removeOnTableClass} ${bachecaAndInstagramTopWrapperClass}`}
          >
            <BachecaAndInstagram />
          </div>
        </div>
        {/* third spacer */}
        <div />
        <div className={footerWrapperClass}>
          <div
            className={`${addOnTableClass} ${bachecaAndInstagramBottomWrapperClass}`}
          >
            <BachecaAndInstagram />
          </div>
          <div className={internalFooterWrapperClass}>
            <div className={phoneNumberWrapperClass}>
              <div
                className={internalFooterItemWapperClass}
                style={{ alignItems: "flex-start" }}
              >
                <a
                  className={`${footerTextClass} ${fontRegita.className} ${removeOnTableClass}`}
                  href={`tel:${phones[0].phone}`}
                  style={{ textAlign: "left" }}
                  id="first-telephone-name"
                >
                  {phones[0].name}
                </a>
                <a
                  className={`${footerTextClass} ${fontRegita.className}`}
                  href={`tel:${phones[0].phone}`}
                  style={{ textAlign: "left" }}
                  id="first-telephone-phone"
                >
                  {phones[0].phone}
                </a>
              </div>
              <div
                className={internalFooterItemWapperClass}
                style={{ alignItems: "flex-start" }}
              >
                <a
                  className={`${footerTextClass} ${fontRegita.className} ${removeOnTableClass}`}
                  href={`tel:${phones[1].phone}`}
                  style={{ textAlign: "left" }}
                  id="second-telephone-name"
                >
                  {phones[1].name}
                </a>
                <a
                  className={`${footerTextClass} ${fontRegita.className}`}
                  href={`tel:${phones[1].phone}`}
                  style={{ textAlign: "left" }}
                  id="second-telephone-phone"
                >
                  {phones[1].phone}
                </a>
              </div>
            </div>
            <div className={internalFooterItemWapperClass}>
              <a
                className={`${footerTextClass} ${fontRegita.className} ${removeOnTableClass}`}
                href={`mailto:${email}`}
                id="email-label"
              >
                {"contact us"}
              </a>
              <a
                className={`${footerTextClass} ${fontRegita.className}`}
                href={`mailto:${email}`}
                id="email-contact"
              >
                {email}
              </a>
            </div>
            <p className={`${footerTextClass} ${fontRegita.className}`}>
              {"Sovico,\nMonza e Brianza, Italy"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
