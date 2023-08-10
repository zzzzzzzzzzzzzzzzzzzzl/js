import React, { useState, useEffect, useRef } from "react";
import Sketch from "react-p5";
import { Enviroment } from "../scripts.js/classes/Enivorment";
import { GameObject } from "../scripts.js/classes/gameObject/GameObject";

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
    function getTree(obj, r) {
      if (obj.children) {
        const a = `padding-left: ${r}px;`;
        return (
          <div style={{ paddingLeft: `20px`, fontSize: `10px` }}>
            {obj.constructor.name}
            {obj.children.map((i, index) => {
              return <div key={index}>{getTree(i, r + 1)}</div>;
            })}
          </div>
        );
      } else {
        return <div>dead</div>;
      }
    }
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Tree: {getTree(env, 0)}</div>
        <div style={{ margin: "10px" }}>
          <div> frameRate:{env.frameRate}</div>
          <div>GameObjects:{GameObject.all.length}</div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sketch setup={env.setup} draw={env.draw} />
      <FrameUpdatingComponent />
    </div>
  );
}

export default Canvas;
