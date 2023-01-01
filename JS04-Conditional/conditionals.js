// *********** IF - ELSE **************

console.log("**** CONDITIONALS ****");

// const sayi = +prompt("Bir sayi giriniz:"); // Başına + koyarak tipini sayıya dönderdik. Bunu Number parantezine alarak da yapabiliriz.
// if (sayi > 0) {
//   console.log(`${sayi} pozitiftir`);
// } else if (sayi == 0) {
//   console.log(`${sayi}0'a eşittir`);
// } else {
//   console.log(`${sayi} negatiftir`);
// }
// console.log(sayi, typeof sayi);

// const n1 = +prompt("Sayi1");
// const n2 = +prompt("Sayi2");
// const n3 = +prompt("Sayi3");

//* 1. Yöntem  - En büyük sayı bulma
// if(n1>=n2 && n1>n3){
//     console.log(`${n1} en büyük sayidir`);
// }
// else if(n2>=n1 && n2>=n3){
//     console.log(`${n2} en büyük sayidir`)
// }
// else if(n3>=n1 && n3>=n2){
//     console.log(`${n3} en büyük sayidir`)
// }

//* 2.Yöntem - En büyük sayı bulma
// let enBuyuk = n1;

// if (n2 >= enBuyuk) {
//   enBuyuk = n2;
// }
// if (n3 >= enBuyuk) {
//   enBuyuk = n3;
// }
// console.log(`${enBuyuk} en buyuktur`);

// const yaş = 20;
// const cinsiyet = "erkek";
// const sağlıklı = true;

// const kosul = yaş >= 18 && cinsiyet == "erkek" && sağlıklı;

// if (kosul) {
//   console.log("Askerlik yapmalı");
// } else {
//   console.log("Askerlik yapması gerekmez");
// }
//* SWITCH - CASE

// const day = +prompt("Day: 1-7");

// switch (day) {
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 3:
//     day = "wednesday";
//     break;
//   case 4:
//     day = "thursday";
//     break;
//   case 5:
//     day = "friday";
//     break;
//   case 6:
//     day = "saturday";
//     break;
//   case 7:
//     day = "sunday";
//     break;
//   default:
//     alert("It must be between 1-7");
//     break;
// }
// console.log(day);

//* Ternary

const grade = +prompt("Enter your grade:");
let result = grade >= 50 ? "You passed the class" : "You flanked";
console.log(result);

//! Homework 1 - Minimum Wage

let wage = +prompt("Enter your wage");

if (wage <= 5500) {
  console.log(`New wage is ${wage * 1.5} TRY`);
} else {
  console.log(`New wage is ${wage * 1.1} TRY`);
}

//! Homework 2 - Bank loan

const income = +prompt("Enter your monthly income:");
let credit =
  income >= 5500
    ? "You can get bank loan"
    : "You are not eligible to get bank loan";
    console.log(credit);

//! Homework 3 - Classes of the Week

