import { Rotation } from "./Rotation";

class Transform {
  constructor(x, y, size) {
    this.position = { x: x, y: y };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = 0.92;
    this.rotation = 0;
    this.size = size;
  }
  getRotation(target) {
    let theta = 0;
    theta = -Math.atan(target.y / target.x);
    if (target.x < 0) {
      theta += Math.PI;
    }
    if (target.x > 0 && target.y > 0) {
      theta += 2 * Math.PI;
    }
    this.rotation = theta - Math.PI * 1.5;
  }
}

export default Transform;
