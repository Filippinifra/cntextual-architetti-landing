"use client";

import {
  CAROUSEL_CAPTIONS,
  MODAL_SLIDES,
} from "@/views/Home/carouselData";
import {
  carouselCaptionSubtitleClass,
  carouselCaptionTitleClass,
} from "@/views/Home/style.css";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  backdropClass,
  closeButtonClass,
  imageAreaClass,
  imageFillClass,
  layoutClass,
  modalCaptionClass,
  navButtonClass,
} from "./style.css";

const len = MODAL_SLIDES.length;

type Props = {
  isOpen: boolean;
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export const CarouselModal = ({
  isOpen,
  index,
  onClose,
  onIndexChange,
}: Props) => {
  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + len) % len);
  }, [index, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % len);
  }, [index, onIndexChange]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen) {
    return null;
  }

  const src = MODAL_SLIDES[index];
  const caption = CAROUSEL_CAPTIONS[index];

  return createPortal(
    <div
      className={backdropClass}
      role="dialog"
      aria-modal="true"
      aria-label="Galleria"
      onClick={onClose}
    >
      <button
        type="button"
        className={closeButtonClass}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Chiudi"
      >
        ×
      </button>
      <div className={layoutClass}>
        <button
          type="button"
          className={navButtonClass}
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Immagine precedente"
        >
          ‹
        </button>
        <div
          className={imageAreaClass}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority
            sizes="100vw"
            className={imageFillClass}
            draggable={false}
          />
        </div>
        <button
          type="button"
          className={navButtonClass}
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Immagine successiva"
        >
          ›
        </button>
      </div>
      {caption && (
        <div className={modalCaptionClass} aria-hidden>
          <p className={carouselCaptionTitleClass}>{caption.title}</p>
          <p className={carouselCaptionSubtitleClass}>{caption.subtitle}</p>
        </div>
      )}
    </div>,
    document.body
  );
};
