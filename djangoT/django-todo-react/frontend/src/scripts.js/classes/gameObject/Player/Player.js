import { Enviroment } from "../../Enivorment";
import { GameObject } from "../GameObject";

export class Player extends GameObject {
  constructor(parent) {
    super(parent);
  }
  playerInput() {
    let x = 0;
    let y = 0;
    if (Enviroment.p5.keyIsDown(87)) {
      y -= 0.025;
    }

    if (Enviroment.p5.keyIsDown(68)) {
      x += 0.025;
    }

    if (Enviroment.p5.keyIsDown(83)) {
      y += 0.025;
    }

    if (Enviroment.p5.keyIsDown(65)) {
      x -= 0.025;
    }
    if (Enviroment.p5.keyIsDown(81)) {
      this.dest();
    }
    if (x && y) {
      x *= 0.7;
      y *= 0.7;
    }
    this.transform.acceleration.x += x;
    this.transform.acceleration.y += y;
    if (Enviroment.p5.mouseIsPressed) {
      this.mouseDown();
    }
  }
  mouseDown() {
    let a = this.transform.getVector({
      x: Enviroment.p5.mouseX,
      y: Enviroment.p5.mouseY,
    });
    let b = this.transform.getRotation(a);
    console.log(Math.sqrt(a.x ** 2 + a.y ** 2));
  }

  final() {
    this.transform.accelerate();
    this.transform.variation();
    this.playerInput();
  }
}
