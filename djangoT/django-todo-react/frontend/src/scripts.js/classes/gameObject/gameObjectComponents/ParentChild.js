export class ParentChild {
  constructor(parent = null) {
    this.children = [];
    this.parent = parent;
    if (this.parent) {
      this.parent.children.push(this);
    }
  }
}
