Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }
  return accumulator;
};

const arr = [1, 2, 3, 4];

const initialValue = 2;
const myArr3 = arr.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(myArr3);
