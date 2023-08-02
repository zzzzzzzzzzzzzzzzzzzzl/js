import { GameObject } from "./GameObject";
import { EntityPhysics } from "./components/physics/EntityPhysics";
import { ProjectilePhysics } from "./components/physics/ProjectilePhysics";

export class Projectile extends GameObject {
  constructor(newTransform, parent) {
    super(newTransform, parent);
    this.getVelocity();
    this.physics = new EntityPhysics(this);
  }
  destroyProjectile() {
    if (
      this.parent.parent.x < this.transform.position.x ||
      this.transform.position.x < 0 ||
      this.parent.parent.y < this.transform.position.y ||
      this.transform.position.y < 0
    ) {
      this.destroy = true;
    }
  }
  final() {
    this.physics.momentum();
  }
  getVelocity() {
    let rot = this.transform.rotation;
    this.transform.velocity.y = 5 * Math.cos(rot);
    this.transform.velocity.x = 5 * Math.sin(rot);
    console.log("here", rot);
  }
}
