import { Enviroment } from "../../Enivorment";

export class Component {
  static all = [];
  static destroy() {
    Component.all = Component.all.filter((i) => {
      if (i.d) {
        return false;
      }
      return true;
    });
  }
  constructor(parent, shape = Enviroment.p5.ellipse) {
    this.parent = parent;
    this.shape = shape;
    Component.all.push(this);
  }
  render() {
    Enviroment.p5.ellipse(
      this.parent.transform.position.x,
      this.parent.transform.position.y,
      this.parent.transform.size.x,
      this.parent.transform.size.x
    );
  }
  dest() {
    this.d = true;
  }
}
