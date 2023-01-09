//! FUNCTION DECLARATION

//*Example-1
//!Declaration
function yazdir() {
  console.log("Merhaba");
}

yazdir(); //!invoke, call
yazdir();
yazdir();

//*Example-2
function selamla(name, surname = "noSurname") {
  console.log(`Hello ${name} ${surname}`);
}
selamla("Gabriel", "James");
selamla("Hassan", "Ahmad");
selamla("John");

//* Example-3

function ageCalculate(name, birthDate) {
  //   const result = `${name}'s age is ${2023 - birthDate}`;
  //   const result = `${name}'s age is ${new Date().getFullYear() - birthDate}`;
  //   return result;
  return `${name}'s age is ${new Date().getFullYear() - birthDate}`;
}
const message1 = ageCalculate("Jemy", 1990);
console.log(message1);
console.log(ageCalculate("Daniel", 1980));

//* Example-4, finding odd or even numbers

function oddEven(number) {
  return number % 2 ? `${number} is Odd` : `${number} is Even`;
}
// console.log(oddEven(5));
// console.log(oddEven(100));
const n = +prompt("Enter a number!"); //* we can make number or n...
console.log(oddEven(n));

const hesapla = function (n1, n2) {
  return `The sum up is: ${n1 + n2}`;
};
const sonuc = hesapla(15, 12);
console.log(sonuc);

const greet = (name, surName) => console.log(`Hello ${name} ${surName}`);

greet(`James`, `Maddison`);

function greet2(name1, surName1) {
  console.log("Hello " + name1 + " " + surName1);
}
greet2("Helen", "Georgian");

const greet3 = function (name2, surName2) {
  console.log(`Hello ${name2} ${surName2}`);
};

greet3(`Ramsey`, `Southgate`);

const name3 = "Dev Ed";
const youtuber = "Elon Musk";

function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

toUpper(name3);
toUpper(youtuber);

const toLower = (text2, text3) => {
  const lowerCased = text2.toLowerCase();
  const upperCased = text3.toUpperCase();
  console.log(`${lowerCased} ${upperCased}`);
};

toLower(name3, youtuber);
// toLower(youtuber);
