"use client";
import { useEffect, useState } from "react";
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

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    const el = elementFromEventTarget(e.target);
    setIsPointer(!!el?.closest(pointerSelector));
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.cursor = "none";
  }, []);

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
