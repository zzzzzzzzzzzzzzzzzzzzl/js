import { GameObjectManager } from "./GameObjectManager";
import { Player } from "./gameObjects/Player";

export class Enviroment {
  constructor(x, y) {
    this.gameObjectArr = [];
    this.objectManager = new GameObjectManager(this);
    this.x = x;
    this.y = y;
  }
  setup = (p5, canvasParentRef) => {
    this.p5 = p5;
    p5.createCanvas(this.x, this.y).parent(canvasParentRef);
  };

  draw = () => {
    this.p5.background(130, 130, 20); //r,g,b
    this.objectManager.updateObjects(this.Arr);
  };
}
