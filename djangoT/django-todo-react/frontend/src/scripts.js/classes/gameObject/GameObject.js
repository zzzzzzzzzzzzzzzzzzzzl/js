import { Enviroment } from "../Enivorment";
import { ParentChild } from "./gameObjectComponents/ParentChild";
import { Renderer } from "./gameObjectComponents/Renderer";
import { Transform } from "./gameObjectComponents/Transform";

export class GameObject extends ParentChild {
  static all = [];
  static posToTile() {
    Enviroment.tileArr = new Array(Enviroment.tileArr.length).fill(
      new Array(Enviroment.tileArr[0].length).fill([])
    );
    GameObject.all.forEach((i) => {
      //assign tile object to tile arr
      const x = Math.floor(i.transform.position.x * Enviroment.cellMulti);
      const y = Math.floor(i.transform.position.y * Enviroment.cellMulti);
      console.log(i);
      Enviroment.tileArr[x][y].push(i);
      i.searchNeighbours({ x: x, y: y });
    });
  }
  static findCollisions() {
    GameObject.all.forEach((i) => {
      const x = Math.floor(i.transform.position.x * Enviroment.cellMulti);
      const y = Math.floor(i.transform.position.y * Enviroment.cellMulti);
      Enviroment.tileArr[x][y].forEach((j) => {
        if (j != i) {
          // console.log(i.transform.checkCollision(j));
        }
      });
    });
  }
  static destroy() {
    Renderer.destroy();
    GameObject.all = GameObject.all.filter((i) => {
      if (i.d) {
        return false;
      }
      return true;
    });
  }
  static final() {
    GameObject.destroy();
    GameObject.posToTile();
    GameObject.findCollisions();
    GameObject.all.forEach((i) => {
      i.final();
    });
  }
  constructor(parent) {
    super(parent);
    this.transform = new Transform(this);
    this.renderer = new Renderer(this);
    GameObject.all.push(this);
  }

  searchNeighbours(pos) {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        Enviroment.p5.square(
          (pos.x + i) * Enviroment.cellSize,
          (pos.y + j) * Enviroment.cellSize,
          Enviroment.cellSize
        );
      }
    }
  }
  dest() {
    this.d = true;
    this.renderer.dest();
  }
}
