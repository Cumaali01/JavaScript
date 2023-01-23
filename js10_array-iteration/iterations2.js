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

//find
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
found = objects.find((item) => {
  return item.id === "b";
});
console.log(found);

// filter
const items = [
  { name: "Bike", price: 100 },
  { name: "Tv", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems);

const pricesLess = items.filter((item) => {
  return item.price < 5000;
});
console.log(pricesLess);

//map
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

//find
const foundItem = items.find((item) => {
  return item.name === "Computer";
});
console.log(foundItem);

// forEach

items.forEach((item) => {
  console.log(item.name);
});

items.forEach((item) => {
  console.log(item.price);
});
