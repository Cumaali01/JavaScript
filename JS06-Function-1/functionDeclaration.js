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
