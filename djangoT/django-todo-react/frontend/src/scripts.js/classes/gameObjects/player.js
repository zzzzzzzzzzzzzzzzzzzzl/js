import { gameObject } from "./GameObject";
import transform from "./components/transform";
import { projectile } from "./projectile";

export class player extends gameObject {
  constructor(parent) {
    super(new transform(250, 250, 20));
    this.parent = parent;
  }
  playerInput(p5) {
    let x = 0;
    let y = 0;
    if (p5.keyIsDown(87)) {
      y -= 0.5;
    }

    if (p5.keyIsDown(68)) {
      x += 0.5;
    }

    if (p5.keyIsDown(83)) {
      y += 0.5;
    }

    if (p5.keyIsDown(65)) {
      x -= 0.5;
    }
    if (x && y) {
      x *= 0.7;
      y *= 0.7;
    }
    this.transform.acceleration.x += x;
    this.transform.acceleration.y += y;
    if (p5.keyIsDown(69)) {
      console.log("e is down");
      this.fireProjectile();
    }
  }
  fireProjectile() {
    let a = new projectile(new transform(250, 250, 20));
    this.parent.gameObjectArr.push(
      new projectile(JSON.parse(JSON.stringify(this.transform)))
    );
  }
}
