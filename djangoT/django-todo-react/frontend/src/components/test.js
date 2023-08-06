import React, { useState, useEffect, useRef } from "react";

function FrameUpdatingComponent() {
  const [frameCount, setFrameCount] = useState(0);
  const requestId = useRef(null);

  const animate = () => {
    setFrameCount((prevState) => prevState + 1);
    requestId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestId.current);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount.

  return <div>Frame Count: {frameCount}</div>;
}

export default FrameUpdatingComponent;
