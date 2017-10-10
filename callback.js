'use strict';

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

//Write a function, funcCaller, that takes a func (a function) and an arg (any data type). The function returns the func called with arg(as an argument).

const funcCaller = (func, arg) => {
  return func(arg);
};

//Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with the first index of the arr, the index # and the whole array.

const firstVal = (arr, func) => {
  return func(arr[0], 0, arr)
};

//Change firstVal to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.

const firstObj = (obj, func) => {
  //args = (first value, first key, object)
  return func(obj[Object.keys(obj)[0]], Object.keys(obj)[0], obj);
}

const firstValTwo = (val, func) => {
  return Array.isArray(val) ? firstVal(val, func) : firstObj(val, func);
}