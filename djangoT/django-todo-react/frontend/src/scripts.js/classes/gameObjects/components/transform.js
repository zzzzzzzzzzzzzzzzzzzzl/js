import { rand } from "../../../functions";

class transform {
  constructor(x, y, size) {
    this.position = { x: x, y: y };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.size = size;
  }
  accelerate() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.velocity.x = this.acceleration.x;
    this.velocity.y = this.acceleration.y;

    this.acceleration.x = this.acceleration.x * 0.92;
    this.acceleration.y = this.acceleration.y * 0.92;
  }
}

export default transform;
