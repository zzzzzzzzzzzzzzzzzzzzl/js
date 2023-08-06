import React, { useState, useEffect, useRef } from "react";
import Sketch from "react-p5";
import { Enviroment } from "../scripts.js/classes/Enivorment";

function Canvas(x, y) {
  let env = new Enviroment(500, 500);

  function FrameUpdatingComponent() {
    const [frameCount, setFrameCount] = useState(null);
    const requestId = useRef(null);

    const animate = () => {
      setFrameCount((prevState) => prevState + 1);
      requestId.current = requestAnimationFrame(animate);
      if (env.p5) {
        setFrameCount(Math.ceil(env.p5.frameRate()));
      }
    };

    useEffect(() => {
      requestId.current = requestAnimationFrame(animate);
      return () => {
        cancelAnimationFrame(requestId.current);
      };
    }, []); // Empty dependency array ensures this runs only on mount and unmount.

    return <div>Frame Count: {frameCount}</div>;
  }
  return (
    <div>
      <Sketch setup={env.setup} draw={env.draw} />
      <FrameUpdatingComponent />
    </div>
  );
}

export default Canvas;
