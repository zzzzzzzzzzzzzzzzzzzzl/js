import { renderGameObjects } from "../functions";
import { player } from "./gameObjects/player";

export class enviroment {
  constructor(x, y) {
    this.gameObjectArr = [];
    this.playerObject = new player(this);
    this.gameObjectArr = [this.playerObject];
    this.x = x;
    this.y = y;
  }
  drawEnviroment(p5) {}

  final() {}

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(this.x, this.y).parent(canvasParentRef);
  };

  draw = (p5) => {
    this.playerObject.playerInput(p5);
    this.playerObject.transform.accelerate();
    p5.background(130, 130, 20); //r,g,b

    renderGameObjects(this.gameObjectArr, p5);
  };
}
