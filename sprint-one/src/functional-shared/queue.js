var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[1] = value;
  } else {
    this.storage[this.storage[Object.keys(this.storage).length] + 1] = value;
  }
};

queueMethods.dequeue = function() {
  let dequeued = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return dequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


