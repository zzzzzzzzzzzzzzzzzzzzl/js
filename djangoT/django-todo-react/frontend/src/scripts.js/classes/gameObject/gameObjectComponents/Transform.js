import { Object, ParentChild } from "./ParentChild";

export class Transform extends ParentChild {
  static srqtOf2 = Math.sqrt(2);
  constructor(parent) {
    super(parent);
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.scale = { x: 1, y: 1 };
    this.size = { x: 1, y: 1 };
    this.drag = 0.93;
    this.rotation = 0;
  }
  enviromentBounds() {}
  accelerate() {
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;

    this.acceleration.x *= this.drag;
    this.acceleration.y *= this.drag;
  }
  variation() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.velocity.x *= this.drag;
    this.velocity.y *= this.drag;
  }
  getRotation(v) {
    let theta = Math.atan2(v.y, v.x);
    if (v.y > 0) {
      theta -= 2 * Math.PI;
    }
    this.rotation = Math.abs(theta);
  }
  getVector(t) {
    return { x: t.x - this.position.x, y: t.y - this.position.y };
  }
  rotationToVector() {
    return {
      x: Math.cos(this.rotation),
      y: -Math.sin(this.rotation),
    };
  }
  checkCollision(object) {
    const v = this.getVector(object.transform.position);
    const distance = Math.sqrt(v.x ** 2 + v.y ** 2);
    // console.log(distance, this.size.x + object.transform.size.x);
    if (distance < (this.size.x + object.transform.size.x) * 0.5) {
      return true;
    }
    return false;
  }
}
