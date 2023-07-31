import React from "react";
import Sketch from "react-p5";
import { enviroment } from "../scripts.js/classes/enivorment";
import { PerformanceStatistics } from "./performanceStatistics";

function Canvas(x, y) {
  let env = new enviroment(500, 500);

  return (
    <div>
      <Sketch setup={env.setup} draw={env.draw} />
    </div>
  );
}

export default Canvas;
