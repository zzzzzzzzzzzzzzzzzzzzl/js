class a extends b {
  constructor() {
    super(this);
  }
}
class b {
  static arr = [];
  constructor(a) {
    b.arr.push(a);
  }
}
