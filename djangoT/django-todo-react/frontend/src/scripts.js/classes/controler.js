import { GameObject } from "./gameObject/GameObject";
import { EntityPhysics } from "./components/physics/EntityPhysics";
import Transform from "./components/Transform";
import { Projectile } from "./Projectile";
import _ from "lodash";

export class Player extends GameObject {
  constructor(parent) {
    super(new Transform(250, 250, 20), parent);
    this.physics = new EntityPhysics(this);
  }
  playerInput() {
    let x = 0;
    let y = 0;
    if (this.parent.parent.p5.keyIsDown(87)) {
      y -= 0.5;
    }

    if (this.parent.parent.p5.keyIsDown(68)) {
      x += 0.5;
    }

    if (this.parent.parent.p5.keyIsDown(83)) {
      y += 0.5;
    }

    if (this.parent.parent.p5.keyIsDown(65)) {
      x -= 0.5;
    }
    if (x && y) {
      x *= 0.7;
      y *= 0.7;
    }
    this.transform.velocity.x += x;
    this.transform.velocity.y += y;
    if (this.parent.parent.p5.mouseIsPressed) {
      this.mouseDown();
    }
  }
  fireProjectile() {
    this.parent.Arr.push(
      new Projectile(_.cloneDeep(this.transform), this.parent)
    );
  }
  mouseDown() {
    let target = {
      x: this.parent.parent.p5.mouseX - this.transform.position.x,
      y: this.parent.parent.p5.mouseY - this.transform.position.y,
    };
    this.transform.getRotation(target);
    this.fireProjectile();
  }

  final() {
    this.physics.momentum();
    this.physics.accelorate();
  }
}
