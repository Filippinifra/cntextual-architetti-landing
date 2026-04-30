"use client";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { cursorClass, pointerClass } from "./style.css";

const pointerSelector = "a, button, [data-cursor-hover]";

const elementFromEventTarget = (n: EventTarget | null): Element | null => {
  if (!n) {
    return null;
  }
  if (n instanceof Element) {
    return n;
  }
  if (n instanceof Text) {
    return n.parentElement;
  }
  return null;
};

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(isMobile);
  }, []);

  useEffect(() => {
    if (isTouchDevice) {
      document.documentElement.style.cursor = "";
      return;
    }

    document.documentElement.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const el = elementFromEventTarget(e.target);
      setIsPointer(!!el?.closest(pointerSelector));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.style.cursor = "";
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`${cursorClass} ${isPointer ? pointerClass : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: 60,
        height: 60,
      }}
    >
      +
    </div>
  );
};
