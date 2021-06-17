export class Rectangle {
  #w = 0;
  #h = 0;

  constructor(width, height) {
    this.#w = Number(width);
    this.#h = Number(height);
  }

  get area() {
    return this.#w * this.#h;
  }

  get perimeter() {
    return 2 * (this.#w + this.#h);
  }
}
