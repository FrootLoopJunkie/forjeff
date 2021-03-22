var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[1] = value;
    } else {
      storage[storage[Object.keys(storage).length] + 1] = value;
    }
  };

  someInstance.dequeue = function() {
    let dequeued = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

