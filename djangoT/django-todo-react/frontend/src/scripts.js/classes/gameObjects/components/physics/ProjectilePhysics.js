export class ProjectilePhysics {
  constructor(parent) {
    this.parent = parent;
  }
  accelerate() {
    this.parent.transform.position.x += this.parent.transform.velocity.x;
    this.parent.transform.position.y += this.parent.transform.velocity.y;
  }
}
