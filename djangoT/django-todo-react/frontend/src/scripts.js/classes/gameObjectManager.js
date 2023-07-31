export class gameObjectManager {
  constructor(parent) {
    this.parent = parent;
    this.Arr = [];
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
      e.transform.accelerate();
    });
  }
  updateObjects() {
    this.renderGameObjects();
    this.accelerateGameObjects();
  }
}
