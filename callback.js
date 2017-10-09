Array.prototype.myEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    console.log(this)
    /*function.call(thisArg, arg1, arg2, ...)
    func is under defined function passed to myEach as an arg */
    func.call(this, this[i])
  }
};


Array.prototype.myMap = function(func) {
  let results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(func.call(this, this[i]));
  }
  return results;
};