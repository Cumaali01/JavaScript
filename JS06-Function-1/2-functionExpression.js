console.log("******** 2 - EXPRESSION *******");

const oddEven1 = function (number2) {
  return number2 % 2 ? `${number2} is ODD` : `${number2} is EVEN`;
};

console.log(oddEven1(9));

//* En buyuk sayiyi bulma

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 > n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

// const n1 = +prompt("sayi1: ");
// const n2 = +prompt("sayi2: ");
// const n3 = +prompt("sayi3: ");

// console.log("The biggest number is: ", buyukBul(n1, n2, n3));

console.log("The biggest number is: ", buyukBul(8, 12)); //! if the numbers are 2 and not 3 we make minus maxValue for the third number
console.log("The biggest number is: ", buyukBul(-8, -12));

//* 4 operations:
const sumUp = function (s1, s2) {
  return s1 + s2;
};
const division = function (s1, s2) {
  return s1 / s2;
};
const multipication = function (s1, s2) {
  return s1 * s2;
};
const minus = function (s1, s2) {
  return s1 - s2;
};

const calculate = function (s1, s2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = sumUp(s1, s2);
      break;
    case "-":
      result = minus(s1, s2);
      break;
    case "*":
      result = multipication(s1, s2);
      break;
    case "/":
      result = division(s1, s2);
      break;
    default:
      break;
  }

  return result;
};

console.log(calculate(3, 5, "+"));
console.log(calculate(3, 5, "*"));
console.log(calculate(45, 15, "/"));
console.log(calculate(12, 13, "-"));
