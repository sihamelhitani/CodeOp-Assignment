class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let test1 = new Node(33);
console.log(test1);
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  getNthNode(m) {
    let current = this.head;
    let n = 0;
    let y = false;
    while (current) {
      n = n + 1;
      current = current.next;
      if (n === m) {
        console.log(current);
        y = true;
      }
    }
    if (!y) {
      console.log(null);
    }
  }
  show() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  //ji
  nextToHead() {
    let current = this.head;
    let n = 0;
    let y = false;
    console.log(current.next.data);
  }
  removeFromTail() {
    let current = this.head;
    let s = 0;
    while (current) {
      s = s + 1;
      current = current.next;
    }

    current = this.head;
    let t = 0;
    while (t < s) {
      if (t == s - 2) {
        current.next = null;
        return 0;
      }
      t = t + 1;
      current = current.next;
    }
  }
  getSize() {
    let current = this.head;
    let s = 0;
    while (current) {
      s = s + 1;
      current = current.next;
    }
    return s;
  }
  mergeAppend(newList) {
    //console.log(newList);
    let current = this.head;
    let y = true;
    while (y) {
      //console.log(current.data);
      current = current.next;
      if (current.next == null) {
        current.next = newList;
        //console.log("here");
        //console.log(current.next);
        y = false;
      }
    }
  }

  addToHead(number) {
    this.head = new Node(number, this.head); //first head is updated to the node of the current number and its next is for the old head
  }
  headValue() {
    let current = this.head;
    console.log(current.data);
  }
  addToTail(number) {
    let x = new Node(number);
    console.log(x);
    let current = this.head;
    let y = true;
    while (y) {
      console.log(current.data);
      current = current.next;
      if (current.next == null) {
        current.next = x;
        console.log("here");
        console.log(current.next);
        y = false;
      }
    }
  }
}

const linkedlist = new linkedList();
const linkedlist2 = new linkedList();

linkedlist.addToHead(100);
linkedlist.addToHead(200);

linkedlist.addToHead(300);
linkedlist.addToHead(400);

linkedlist.addToHead(44);
linkedlist.addToHead(33);
linkedlist.show();

console.log(linkedlist);
console.log("moment of truth");
linkedlist.addToTail(7);
//test.show();
//here i had to use console.dir bcs console.log has depth limit so i needed to bypass the scope in order
//to show the whole linked list.

console.dir(linkedlist, { depth: Infinity });
console.log("Now for the nth node");
linkedlist.getNthNode(10);
console.log("next to head");
linkedlist.nextToHead();
console.log("Get size of the linked list");
console.log(linkedlist.getSize());
console.log("Remove from tail");
linkedlist.removeFromTail();
linkedlist.show();
console.log("Head value");
linkedlist.headValue();
console.log("merging two linked lists: ");
linkedlist.mergeAppend(linkedlist2);

console.dir(linkedlist, { depth: Infinity });
