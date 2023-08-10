import { rand } from "../../../functions";
import { GameObject } from "../GameObject";

export class Tasty extends GameObject {
  constructor(parent) {
    super(parent);
    this.transform.position = { x: rand(500), y: rand(500) };
    this.transform.size = { x: 10, y: 10 };
  }
  changeTarget(target) {
    let a = this.transform.getVector(target);
    this.transform.getRotation(a);
    let vec = this.transform.rotationToVector();
    vec.x *= 0.3;
    vec.y *= 0.3;
    this.transform.acceleration = vec;
  }

  final() {
    this.changeTarget(this.parent.player.transform.position);
    this.transform.accelerate();
    this.transform.variation();
  }
}
