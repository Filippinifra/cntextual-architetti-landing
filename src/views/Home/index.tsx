"use client";
import localFont from "next/font/local";
import { getImageProps } from "next/image";
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
  typographyWithBgClass,
  typographyWithBgWrapperClass,
  wrapperClass,
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

const email = "info@cntextual.com";
const phones = ["+393319075460", "+393663193937"];
const instagram = "itsfilippinifra";

const commonImageProps = {
  width: 800,
  height: 400,
  priority: true,
};

export const HomeView = () => {
  const [bgImageIndex, setBgImageIndex] = useState<number>(0);

  const {
    props: { src: image1 },
  } = getImageProps({
    ...commonImageProps,
    priority: true,
    src: "/carousel-text/1.jpg",
    alt: "carousel-1",
  });
  const {
    props: { src: image2 },
  } = getImageProps({
    ...commonImageProps,
    src: "/carousel-text/2.jpg",
    alt: "carousel-2",
  });
  const {
    props: { src: image3 },
  } = getImageProps({
    ...commonImageProps,
    src: "/carousel-text/3.jpg",
    alt: "carousel-3",
  });
  const {
    props: { src: image4 },
  } = getImageProps({
    ...commonImageProps,
    src: "/carousel-text/4.jpg",
    alt: "carousel-4",
  });
  const {
    props: { src: image5 },
  } = getImageProps({
    ...commonImageProps,
    src: "/carousel-text/5.jpg",
    alt: "carousel-5",
  });

  const carouselImages = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        bgImageIndex === carouselImages.length - 1 ? 0 : bgImageIndex + 1;
      setBgImageIndex(newIndex);
    }, 200);

    return () => clearInterval(interval);
  }, [setBgImageIndex, bgImageIndex]);

  return (
    <main className={`${wrapperClass} ${fontMedium.className}`}>
      <div className={internalWrapperClass}>
        <div style={{ height: 60 }} />
        <div className={typographyWithBgWrapperClass}>
          {carouselImages.map((img, i) => (
            <div
              style={{
                visibility: bgImageIndex === i ? "visible" : "hidden",
                position: "absolute",
              }}
              key={`${img}-${i}`}
            >
              <h1
                className={typographyWithBgClass}
                style={{
                  backgroundImage: `url(
        '${img}')`,
                }}
              >
                <span className={titleClass}>cntextual</span>
                <span className={subtitleClass}>{"\narchitetti"}</span>
              </h1>
              <div style={{ height: 120 }} />
              <div>
                <p className={mediumTextClass}>coming soon</p>
              </div>
            </div>
          ))}
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
