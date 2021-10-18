class queue {
  constructor(elements) {
    this.elements = elements;
  }
  show() {
    if (this.elements == null) {
      this.elements = [];
    }
    return this.elements;
  }
  enqueue(n) {
    if (this.elements == null) {
      this.elements = [];
    }
    let len = this.elements.length;

    this.elements[len] = n;
    return this.elements;
  }
  dequeue() {
    if (this.elements == null) {
      this.elements = [];
    }

    this.elements.splice(0, 1);
    return this.elements;
  }
  getSize() {
    if (this.elements == null) {
      this.elements = [];
    }
    const desc = "This Queue is of size: ";
    return desc + this.elements.length;
  }
  isEmpty() {
    if (this.elements == null || this.elements == []) {
      return true;
    }
  }
}
const test1 = new queue([1, 2, 5, 4]);
console.log(test1.show());
console.log(test1.enqueue(8));
console.log(test1.dequeue());
