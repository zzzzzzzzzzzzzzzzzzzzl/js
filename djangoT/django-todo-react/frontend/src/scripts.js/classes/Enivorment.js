export class Enviroment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  setup = (p5, canvasParentRef) => {
    this.p5 = p5;
    p5.createCanvas(this.x, this.y).parent(canvasParentRef);
  };

  draw = () => {
    this.p5.background(130, 130, 20); //r,g,b
  };
}
