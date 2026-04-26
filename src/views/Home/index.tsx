"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  addOnTableClass,
  bachecaAndInstagramBottomWrapperClass,
  bachecaAndInstagramTopWrapperClass,
  carouselCaptionClass,
  carouselCaptionSubtitleClass,
  carouselCaptionTitleClass,
  carouselImageClass,
  carouselLogoOverlayClass,
  carouselOverlayLogoImageClass,
  comingSoonWrapperclass,
  externalImagesWrapperClass,
  footerTextClass,
  footerWrapperClass,
  imagesWrapperClass,
  internalFooterItemWapperClass,
  internalFooterWrapperClass,
  linksClass,
  mainClass,
  phoneNumberWrapperClass,
  removeOnTableClass,
  wrapper,
} from "./style.css";

const email = "info@cntextual.it";
const phones = [
  { phone: "+39 3319075460", name: "Christian Spolti" },
  { phone: "+39 3663193937", name: "Nicolò Mariani" },
];
const instagram = "cntextual";

const BachecaAndInstagram = () => {
  return (
    <>
      <a
        id="bacheca"
        className={linksClass}
        href="/BACHECA.pdf"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        bacheca
      </a>
      <a
        id="instagram"
        className={linksClass}
        target="_blank"
        href={`https://www.instagram.com/${instagram}/`}
        style={{ textDecoration: "none" }}
      >
        instagram
      </a>
    </>
  );
};

const LOGO_SRC = "/cntextual-logo-bianco.png";

const CAROUSEL_SLIDES = [...Array(19)].map(
  (_, i) => `/carousel/${String(i + 1).padStart(2, "0")}.jpg`
);

type CarouselCaption = {
  title: string;
  subtitle: string;
};

const CAROUSEL_CAPTIONS: (CarouselCaption | null)[] = [
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "Porta S.Biagio Apartment", subtitle: "Appartamento privato" },
  { title: "RM144", subtitle: "Residenza" },
  { title: "RM144", subtitle: "Residenza" },
  { title: "RM144", subtitle: "Residenza" },
  { title: "TT33", subtitle: "Residenza" },
  { title: "Casa DV", subtitle: "Residenza" },
  { title: "Casa DV", subtitle: "Residenza" },
  { title: "Casa VDA", subtitle: "Residenza" },
  { title: "Domus 8", subtitle: "Residenza" },
  { title: "Scuola dell'infanzia Villasanta", subtitle: "Edificio Pubblico" },
  { title: "Scuola dell'infanzia Villasanta", subtitle: "Edificio Pubblico" },
  { title: "Scuola dell'infanzia Villasanta", subtitle: "Edificio Pubblico" },
  { title: "Scuola dell'infanzia Pordenone", subtitle: "Edificio Pubblico" },
  { title: "Scuola dell'infanzia Blassono", subtitle: "Edificio Pubblico" },
  { title: "Rifugio Tonini", subtitle: "Edificio Pubblico" },
];

export const HomeView = () => {
  const [bgImageIndex, setBgImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prev) =>
        prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={mainClass}>
      <div className={externalImagesWrapperClass}>
        {CAROUSEL_SLIDES.map((src, i) => {
          const caption = CAROUSEL_CAPTIONS[i];
          return (
            <div
              key={src}
              style={{ zIndex: i === bgImageIndex ? 100 : 50 }}
              className={imagesWrapperClass}
            >
              <Image
                alt=""
                src={src}
                fill
                priority={i === 0}
                sizes="(max-width: 1000px) 100vw, 896px"
                className={carouselImageClass}
              />
              {caption && (
                <div className={carouselCaptionClass}>
                  <p className={carouselCaptionTitleClass}>{caption.title}</p>
                  <p className={carouselCaptionSubtitleClass}>
                    {caption.subtitle}
                  </p>
                </div>
              )}
            </div>
          );
        })}
        <div className={carouselLogoOverlayClass} aria-hidden>
          <Image
            src={LOGO_SRC}
            alt=""
            width={1200}
            height={240}
            sizes="(max-width: 1000px) 45vw, 450px"
            className={carouselOverlayLogoImageClass}
            priority
          />
        </div>
      </div>
      <div className={wrapper}>
        <div className={comingSoonWrapperclass}>
          <div
            className={`${removeOnTableClass} ${bachecaAndInstagramTopWrapperClass}`}
          >
            <BachecaAndInstagram />
          </div>
        </div>
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
                  className={`${footerTextClass} ${removeOnTableClass}`}
                  href={`tel:${phones[0].phone}`}
                  style={{ textAlign: "left" }}
                  id="first-telephone-name"
                >
                  {phones[0].name}
                </a>
                <a
                  className={footerTextClass}
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
                  className={`${footerTextClass} ${removeOnTableClass}`}
                  href={`tel:${phones[1].phone}`}
                  style={{ textAlign: "left" }}
                  id="second-telephone-name"
                >
                  {phones[1].name}
                </a>
                <a
                  className={footerTextClass}
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
                className={`${footerTextClass} ${removeOnTableClass}`}
                href={`mailto:${email}`}
                id="email-label"
              >
                {"contact us"}
              </a>
              <a
                className={footerTextClass}
                href={`mailto:${email}`}
                id="email-contact"
              >
                {email}
              </a>
            </div>
            <p className={footerTextClass}>
              {"Sovico,\nMonza e Brianza, Italy"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
