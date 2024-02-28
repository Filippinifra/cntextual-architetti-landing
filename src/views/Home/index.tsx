"use client";
import localFont from "next/font/local";
import { getImageProps } from "next/image";
import { useEffect, useState } from "react";
import {
  comingSoonClass,
  comingSoonWrapperclass,
  footerTextClass,
  footerWrapperClass,
  internalFooterItemWapperClass,
  internalFooterWrapperClass,
  internalWrapperClass,
  linksClass,
  phoneNumberWrapperClass,
  subtitleClass,
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
const phones = [
  { phone: "+393319075460", name: "Christian Spolti" },
  { phone: "+393663193937", name: "Nicolò Mariani" },
];
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
    <main className={wrapperClass}>
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
                  backgroundImage: `url('${img}')`,
                }}
              >
                <span className={titleClass}>cntextual</span>
                <span className={subtitleClass}>{"\narchitetti"}</span>
              </h1>
              <div style={{ height: 120 }} />
              <div className={comingSoonWrapperclass}>
                <p className={`${comingSoonClass} ${fontMedium.className}`}>
                  coming soon
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <a className={`${linksClass} ${fontRegular.className}`}>
                    bacheca
                  </a>
                  <a
                    className={`${linksClass} ${fontRegular.className}`}
                    target="_blank"
                    href={instagram}
                    style={{ textDecoration: "none" }}
                  >
                    instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={footerWrapperClass}>
          <div className={internalFooterWrapperClass}>
            <div className={phoneNumberWrapperClass}>
              <div className={internalFooterItemWapperClass}>
                <a
                  className={`${footerTextClass} ${fontRegita.className}`}
                  href={`tel:${phones[0]}`}
                >
                  {phones[0].name}
                </a>
                <a
                  className={`${footerTextClass} ${fontRegita.className}`}
                  href={`tel:${phones[0]}`}
                >
                  {phones[0].phone}
                </a>
              </div>
              <div className={internalFooterItemWapperClass}>
                <a
                  className={`${footerTextClass} ${fontRegita.className}`}
                  href={`tel:${phones[1]}`}
                >
                  {phones[1].name}
                </a>
                <a
                  className={`${footerTextClass} ${fontRegita.className}`}
                  href={`tel:${phones[1]}`}
                >
                  {phones[1].phone}
                </a>
              </div>
            </div>
            <div className={internalFooterItemWapperClass}>
              <a
                className={`${footerTextClass} ${fontRegita.className}`}
                href={`mailto:${email}`}
              >
                {"contact us"}
              </a>
              <a
                className={`${footerTextClass} ${fontRegita.className}`}
                href={`mailto:${email}`}
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
