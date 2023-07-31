import { gameObject } from "./GameObject";

export class projectile extends gameObject {
  constructor(newTransform, parent) {
    super(newTransform, parent);
  }
}
