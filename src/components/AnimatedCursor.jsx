import React, { useState, useEffect } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-4  h-4 bg-light-Primary blur-[6px]  rounded-full pointer-events-none transform transition-transform duration-500 ease-in-out  z-30 "
      style={{
        top: `${position.y - 5}px`,
        left: `${position.x - 5}px`,
        transform: "translate(-50%, -50%) scale(1.1)",
      }}
    ></div>
  );
};

export default AnimatedCursor;
