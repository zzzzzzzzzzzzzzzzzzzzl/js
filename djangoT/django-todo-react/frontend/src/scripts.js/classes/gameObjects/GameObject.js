import { BasePhysics } from "./components/physics/BasePhysics";

export class GameObject {
  constructor(newTransform, parent) {
    this.transform = newTransform;
    this.parent = parent;
    this.physics = new BasePhysics();
  }
}
