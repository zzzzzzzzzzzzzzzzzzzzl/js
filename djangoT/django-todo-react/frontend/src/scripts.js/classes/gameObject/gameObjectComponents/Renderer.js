import { Enviroment } from "../../Enivorment";
import { Component } from "./Components";

export class Renderer {
  static all = [];
  static destroy() {
    Renderer.all = Renderer.all.filter((i) => {
      if (i.d) {
        return false;
      }
      return true;
    });
  }
  static renderAll() {
    Renderer.all.forEach((i) => {
      i.render();
    });
  }

  constructor(parent, shape = Enviroment.p5.ellipse) {
    this.parent = parent;
    this.shape = shape;
    Renderer.all.push(this);
  }
  render() {
    Enviroment.p5.ellipse(
      this.parent.transform.position.x,
      this.parent.transform.position.y,
      this.parent.transform.size.x,
      this.parent.transform.size.y
    );
  }
  dest() {
    this.d = true;
  }
}
