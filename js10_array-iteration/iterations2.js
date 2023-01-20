// forEach
[1, 2, 3].forEach((item, index) =>
  console.log(`The item: ${item}, The index: ${index}`)
);

[4, 5, 6].forEach(function (x, y) {
  console.log(x, y);
});

// map
const three = [1, 2, 3];
const doubled = three.map((item) => console.log(item * 2));

console.log("---------------------");

const doubled2 = three.map(function (x) {
  return x * 2;
});

console.log(doubled2);

// filter
const ints = [1, 2, 3];
const evens = ints.filter((item, index, arr) =>
  console.log(item % 2 === 0, index - 1, arr)
);

const evens2 = ints.filter(function (x) {
  return x % 2 == 0;
});
console.log(`The even number is: ${evens2}`);
console.log(evens2);

//reduce
const sum = [1, 2, 3].reduce((result, item) => {
  return result + item;
});
console.log(sum);

// some

const numbers = [1, 2, 3, -1, -4];
hasNegativeNumbers = numbers.filter((item) => item < 0);
console.log(`The positive numbers are: ${hasNegativeNumbers}`);

hasPositiveNumbers = numbers.filter((x) => x > 0);
console.log(`The positive numbers are: ${hasPositiveNumbers}`);
