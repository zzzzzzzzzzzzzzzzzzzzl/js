import React from "react";
import Sketch from "react-p5";
import { Enviroment } from "../scripts.js/classes/Enivorment";

function Canvas(x, y) {
  let env = new Enviroment(500, 500);

  return (
    <div>
      <Sketch setup={env.setup} draw={env.draw} />
    </div>
  );
}

export default Canvas;
