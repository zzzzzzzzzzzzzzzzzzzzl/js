import React from "react";
import Sketch from "react-p5";
import { enviroment } from "../scripts.js/classes/enivorment";

function Canvas(x, y) {
  let env = new enviroment(500, 500);
  return <Sketch setup={env.setup} draw={env.draw} />;
}

export default Canvas;
