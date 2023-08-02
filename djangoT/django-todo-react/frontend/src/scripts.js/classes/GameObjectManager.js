import { Player } from "./gameObjects/Player";

export class GameObjectManager {
  constructor(parent) {
    this.parent = parent;
    this.playerObject = new Player(this);
    this.Arr = [this.playerObject];
  }
  renderGameObjects() {
    this.Arr.forEach((e) => {
      this.parent.p5.ellipse(
        e.transform.position.x,
        e.transform.position.y,
        e.transform.size
      );
    });
  }
  accelerateGameObjects() {
    this.Arr.forEach((e) => {
      e.final();
    });
  }
  destroyGameObjects() {
    this.Arr = this.Arr.filter((e) => {
      if (e.destroy) {
        return false;
      }
      return true;
    });
  }
  updateObjects() {
    this.playerObject.playerInput();
    this.renderGameObjects();
    this.accelerateGameObjects();
    this.destroyGameObjects();
  }
}
