// console.log("app js is running");
// var a = 5;
// console.log(a);
// {
//   var a = 3;
//   console.log(a);
// }
// console.log(a);

// console.log("-------------");

// let b = 5;
// console.log(b);
// {
//   let b = 3;
//   console.log(b);
// }
// console.log(b);

// // let b=5;
// // console.log(b);
// // {
// //      b=3;
// //     console.log(b);
// // }
// // console.log(b);

// //type of data
// console.log(typeof 0);
// console.log(typeof "zero");
// console.log(typeof (8 > 10));
// console.log(8 > 10); // we have the result here

// let c = +prompt("Enter something:"); //by adding + before prompt we can convert it to
// console.log(c, typeof c);

// //undefined class
// let age;
// console.log(age); // it will be shown as 'undefined'

// let a = null;
// console.log(a);

// console.log(null + 3);
// console.log(undefined + 4); //Nan = not a number
// console.log(typeof undefined);
// console.log(typeof null);

// let x;
// do {
//   x = prompt("enter a number:");
// } while (isNaN(x));
// console.log(x, x * x);

let g = 0.1 + 0.2;
console.log(g);
console.log(g.toFixed(2), typeof g);
console.log(+g.toFixed(2), typeof g); // by using + we made it number

let h=1_000_000_000 // to read clearly
console.log(h)

let userName='James';

console.log('Hello', userName);

console.log(`Hello ${userName}`);

console.log(`2+3 = ${2+3}`);

console.log(userName.length) //number of the characters

let x= 8 > 5;
let y = 42==35;

//boolean

console.log(`x = ${x}`);
console.log(`y = ${y}`);

//true boolean

let z=Boolean('Negative');
let t=Boolean('Positive');
console.log("z: " +z);
console.log("t: "+t);

console.log(Boolean(3<5))

//false boolean
let p=Boolean("");
let k=Boolean(0);
console.log("p: "+ p);
console.log("k: "+ k);

console.log(Boolean(45>44));

const myCar ={
    make: 'Ford',
    model:'Mustang',
    year: 1965,
    color:'Black',
}
console.log(myCar);

myCar.color='Green';
console.log(myCar);

myCar.sunRoof=false;
console.log(myCar);

myCar.age= function(current){
    console.log(current - this.year);
}
myCar.age(2022);

