"use client";
import { useEffect, useState } from "react";
import { cursorClass, pointerClass } from "./style.css";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    if (e.toElement.nodeName === "A") {
      setIsPointer(true);
    } else {
      setIsPointer(false);
    }
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
