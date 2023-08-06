import { Component } from "./Components";

export class Transform {
  constructor(parent) {
    this.parent = parent;
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.scale = { x: 1, y: 1 };
    this.size = { x: 1, y: 1 };
    this.drag = 0.8;
  }
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
}
