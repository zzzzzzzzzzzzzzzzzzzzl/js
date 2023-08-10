import p5 from "p5";
import { GameObject } from "./gameObject/GameObject";
import { Renderer } from "./gameObject/gameObjectComponents/Renderer";
import { Transform } from "./gameObject/gameObjectComponents/Transform";
import { Player } from "./gameObject/Player/Player";
import { ParentChild } from "./gameObject/gameObjectComponents/ParentChild";
import { Tasty } from "./gameObject/tasty/tasty";

export class Enviroment extends ParentChild {
  static p5;
  static tileArr;
  static cellSize = 20;
  static bounds;
  static setBounds(x, y) {
    Enviroment.bounds = { x: x, y: y };
  }
  static cellMulti = 1 / Enviroment.cellSize;
  constructor(x, y) {
    super(null);
    this.x = x;
    this.y = y;
    this.frameRate = 10;

    Enviroment.tileArr = new Array(x / Enviroment.cellSize).fill(
      new Array(y / Enviroment.cellSize).fill([])
    );
  }

  setup = (p5, canvasParentRef) => {
    Enviroment.p5 = p5;

    this.player = new Player(this);
    this.player.transform.size = { x: 20, y: 20 };
    this.player.transform.position = { x: 100, y: 100 };
    new Tasty(this);
    new Tasty(this);
    new Tasty(this);
    new Tasty(this);
    p5.createCanvas(this.x, this.y).parent(canvasParentRef);
  };

  draw = () => {
    Enviroment.p5.background(130, 130, 20);
    this.drawGrid();
    GameObject.final();
    Renderer.renderAll();
    this.frameRate = Math.round(Enviroment.p5.frameRate());
  };

  drawGrid() {
    Enviroment.tileArr.forEach((i, idx) => {
      Enviroment.p5.line(
        idx * Enviroment.cellSize,
        0,
        idx * Enviroment.cellSize,
        this.y
      );
      Enviroment.p5.line(
        0,
        idx * Enviroment.cellSize,
        this.x,
        idx * Enviroment.cellSize
      );
    });
  }
}
