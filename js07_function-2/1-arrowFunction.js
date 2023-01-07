// ? ===============================================
// ?               FUNCTIONS
// ? ===============================================

// !------------------------------------------------
// ! 3.METHOD  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//*Sum Up
// const sumUp = (a, b) => a + b;
// console.log(sumUp(5, 9));

//* Üst Al
// const usAl = (t, u) => t ** u;
// console.log(usAl(2, 3));

// //* EXAMPLE: CLYLINDER VOLUME
// //************************************************/

const r = Number(prompt("Radius:"));
const h = Number(prompt("Height:"));

const volumeCal = (r, h) => Math.PI * r * r * h;
console.log(`Volume of ${r} and ${h} is ${volumeCal(r, h).toFixed(3)}`); //*toFixed leave as much decimal as we need.
// console.log(volumeCal(r, h));

/// //* EXAMPLE: AGE CALCULATION
// //************************************************/

const bDate = +prompt("Kindly enter your birth date:");

const ageCalculate = (bDate) => new Date().getFullYear() - bDate;
console.log("Your age is:" + ageCalculate(bDate));

// //?-----------------------------------------

// // console.log("YASINIZ:" + yasHesapla2(tarih));
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

// //! Func Expression yontemi ile tanimlama
// const yasHesapla2 = function (tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };
// //?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla3(tarih));

// //! Func Declaration yontemi ile tanimlama
// function yasHesapla3(tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// }
// //?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

// let stringResult = "1,1";
// f(n) = f(n-1) + f(n-2)
/ / const fibo = (n) => {
//   let fib1 = 1;
//   let fib2 = 1;
//   let toplam = 0;

//   for (let i = 2; i < n; i++) {
//     toplam = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = toplam;
//     stringResult += "," + fib2;
//   }

//   return fib2;
// };

// const n = +prompt("n terimini giriniz:");
// if (n <= 0) {
//   console.log("Lutfen 0 dan buyuk bir sayi giriniz.");
// } else {
//   console.log(`FIBO(${n})= ${fibo(n)}`);
//   console.log(stringResult);
// }
