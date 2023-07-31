import { gameObject } from "./GameObject";
import transform from "./components/transform";
import { projectile } from "./projectile";
import _ from "lodash";

export class player extends gameObject {
  constructor(parent) {
    super(new transform(250, 250, 20), parent);
    this.arr = [];
  }
  playerInput() {
    let x = 0;
    let y = 0;
    if (this.parent.p5.keyIsDown(87)) {
      y -= 0.5;
    }

    if (this.parent.p5.keyIsDown(68)) {
      x += 0.5;
    }

    if (this.parent.p5.keyIsDown(83)) {
      y += 0.5;
    }

    if (this.parent.p5.keyIsDown(65)) {
      x -= 0.5;
    }
    if (x && y) {
      x *= 0.7;
      y *= 0.7;
    }
    this.transform.acceleration.x += x;
    this.transform.acceleration.y += y;
    if (this.parent.p5.keyIsDown(69)) {
      this.fireProjectile();
    }
  }
  fireProjectile() {
    let a = new projectile(new transform(250, 250, 20));
    this.arr.push(a);
    this.parent.objectManager.Arr.push(
      new projectile(_.cloneDeep(this.transform), this.parent)
    );
  }
}
