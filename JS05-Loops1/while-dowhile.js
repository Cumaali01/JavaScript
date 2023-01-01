//* While doWhile Loops

//? Kullanicidan 0-100 arası not girmesini iste ve yanlış girerse 0-100 arasi girmesini zorla

// let number = Number(prompt("Please enter your grade"));

//* 1. Yöntem
// if(number>=0 && number<=100){
//     console.log((`Your grade is ${number}`));
// }else{
//     console.log("Please enter between 0-100!!!")
// }

//* 2.Yöntem
// while (number < 0 || number > 100) {
//   console.log("Please enter between 0-100!!!");
//   number = +prompt("Please enter your grade"); //!Doğrusunu yazdirana kadar döndürür
// }
// console.log("Your grade is", number);

//*DO-While:

let sayac = 1;
do {
  console.log("Hello -", sayac);
  sayac++;
} while (sayac <= 10);

//* 3.Yöntem (0-100 Not girmek)

let grade;
do {
   grade = Number(prompt("Please enter your grade"));
   if(grade <0 || grade>100){
    console.log("Your grade must be between 0-100");
   }
} while(grade<0 || grade>100)
console.log("Your grade is", grade);
