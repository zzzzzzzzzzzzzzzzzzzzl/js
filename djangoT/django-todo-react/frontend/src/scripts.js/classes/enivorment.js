import { renderGameObjects } from "../functions";
import { gameObjectManager } from "./gameObjectManager";
import { player } from "./gameObjects/player";

export class enviroment {
  constructor(x, y) {
    this.gameObjectArr = [];
    this.playerObject = new player(this);
    this.objectManager = new gameObjectManager(this);
    this.objectManager.Arr.push(this.playerObject);
    this.x = x;
    this.y = y;
  }
  setup = (p5, canvasParentRef) => {
    this.p5 = p5;
    p5.createCanvas(this.x, this.y).parent(canvasParentRef);
  };

  draw = () => {
    this.playerObject.playerInput();
    this.playerObject.transform.accelerate();
    this.p5.background(130, 130, 20); //r,g,b
    this.objectManager.updateObjects(this.Arr);
  };
}
