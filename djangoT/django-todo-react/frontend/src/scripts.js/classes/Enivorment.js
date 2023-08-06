import p5 from "p5";
import { GameObject } from "./gameObject/GameObject";
import { Component } from "./gameObject/gameObjectComponents/Components";
import { Renderer } from "./gameObject/gameObjectComponents/Renderer";
import { Transform } from "./gameObject/gameObjectComponents/Transform";
import { Player } from "./gameObject/Player/Player";

export class Enviroment {
  static p5;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setup = (p5, canvasParentRef) => {
    Enviroment.p5 = p5;

    this.player = new Player(this);
    this.player.transform.size = { x: 10, y: 200 };
    this.player.transform.position = { x: 100, y: 100 };
    p5.createCanvas(this.x, this.y).parent(canvasParentRef);
  };

  draw = () => {
    // Enviroment.p5.background(130, 130, 20);
    GameObject.destroy();
    Renderer.renderAll();
    this.player.final();
    this.player.transform.accelerate();
    Enviroment.p5.ellipse(50, 50, 50, 50);
  };
}
