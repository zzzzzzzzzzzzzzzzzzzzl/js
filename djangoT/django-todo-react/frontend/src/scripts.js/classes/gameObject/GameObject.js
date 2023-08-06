import { Component } from "./gameObjectComponents/Components";
import { Renderer } from "./gameObjectComponents/Renderer";
import { Transform } from "./gameObjectComponents/Transform";

export class GameObject {
  static all = [];
  static destroy() {
    Renderer.destroy();
    GameObject.all = GameObject.all.filter((i) => {
      if (i.d) {
        return false;
      }
      return true;
    });
  }
  constructor(parent) {
    this.parent = parent;
    this.transform = new Transform(this);
    this.renderer = new Renderer(this);
    GameObject.all.push(this);
  }

  dest() {
    this.d = true;
    this.renderer.dest();
  }
}
