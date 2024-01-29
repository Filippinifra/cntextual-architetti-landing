"use client";
import { useEffect, useState } from "react";
import {
  footerWrapperClass,
  internalFooterWrapperClass,
  internalWrapperClass,
  mediumTextClass,
  phoneNumberWrapperClass,
  subtitleClass,
  textClass,
  titleClass,
  wrapperClass,
} from "./style.css";

export const carouselImages = [
  "carousel-text/1.jpg",
  "carousel-text/2.jpg",
  "carousel-text/3.jpg",
  "carousel-text/4.jpg",
  "carousel-text/5.jpg",
];

const email = "info@cntextual.com";
const phones = ["+393319075460", "+393663193937"];
const instagram = "itsfilippinifra";

export const HomeView = () => {
  const [bgImageIndex, setBgImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        bgImageIndex === carouselImages.length - 1 ? 0 : bgImageIndex + 1;
      setBgImageIndex(newIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [setBgImageIndex, bgImageIndex]);

  return (
    <main className={wrapperClass}>
      <div className={internalWrapperClass}>
        <div style={{ height: 60 }} />
        <div>
          <h1
            className={titleClass}
            style={{
              backgroundImage: `url(
        '${carouselImages[bgImageIndex]}')`,
            }}
          >
            cntextual
            <h2 className={subtitleClass}>architetti</h2>
          </h1>
          <div>
            <p className={mediumTextClass}>coming soon</p>
          </div>
        </div>
        <div className={footerWrapperClass}>
          <div className={internalFooterWrapperClass}>
            <div className={phoneNumberWrapperClass}>
              <a className={textClass} href={`tel:${phones[0]}`}>
                {phones[0]}
              </a>
              <a className={textClass} href={`tel:${phones[1]}`}>
                {phones[1]}
              </a>
            </div>
            <a className={textClass} href={`mailto:${email}`}>
              {email}
            </a>
            <a
              className={textClass}
              href={`http://instagram.com/_u/${instagram}/`}
              target="_blank"
            >
              {"instagram"}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
