class Stack {
  constructor(elements) {
    this.elements = elements;
  }
  show() {
    if (this.elements == null) {
      this.elements = [];
    }
    return this.elements;
  }

  /*adds an item to the tail of the array*/
  push(n) {
    if (this.elements == null) {
      this.elements = [];
    }
    let len = this.elements.length;

    this.elements[len] = n;
    return this.elements;
  }
  /*pops the last item of the array*/
  pop() {
    if (this.elements == null) {
      this.elements = [];
      const msg = "nothing to pop";
    } else {
      let lent = this.elements.length;
      this.elements.splice(lent - 1, 1);
    }

    return this.elements;
  }
  size() {
    if (this.elements == null) {
      this.elements = [];
    }
    const desc = "This Stack is of size: ";
    return desc + this.elements.length;
  }
}
const test1 = new Stack();
console.log(test1.show());

console.log(test1.push(8));
console.log(test1.pop());
console.log(test1.size());
