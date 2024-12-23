import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    let cursorX = 0;
    let cursorY = 0;
    let targetX = 0;
    let targetY = 0;

    const moveCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (targetX - cursorX) * 0.5;
      cursorY += (targetY - cursorY) * 0.5;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener("mousemove", moveCursor);
    requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
};

export default Cursor;
