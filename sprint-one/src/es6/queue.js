class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[1] = value;
    } else {
      this.storage[this.storage[Object.keys(this.storage).length] + 1] = value;
    }
  }

  dequeue() {
    let dequeued = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return dequeued;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
