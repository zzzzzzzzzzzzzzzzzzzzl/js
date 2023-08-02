export class EntityPhysics {
  constructor(parent) {
    this.parent = parent;
  }
  momentum() {
    this.parent.transform.position.x += this.parent.transform.velocity.x;
    this.parent.transform.position.y += this.parent.transform.velocity.y;
  }
  accelorate() {
    this.parent.transform.velocity.y *= this.parent.transform.acceleration;
    this.parent.transform.velocity.x *= this.parent.transform.acceleration;
  }
}
