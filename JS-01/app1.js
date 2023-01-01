// console.log('app1.js is running');
// alert('Hello');
// console.log('How are you?');
// window.alert('cw');
// console.log('first lesson');
// let firstName =prompt('Enter your name:');
// alert('First Name:' + firstName)

// let result = confirm('Are you legal?');
// console.log(result);

var myNumber1=11;
console.log(myNumber1);

let v1= 55;
console.log(v1);

var myNumber1=24;
console.log(myNumber1);

v1=88;
console.log(v1)

let a= 12;
let b= "abc";

if(b=="abc"){
    let a=23
    console.log(a); //a=23 here due to being in if block
}
console.log(a); //a=12 here, due to it is in global block

let firstName= "James";
console.log(firstName);

// primitive type
let num1=501;
let num2=467;
num2+=2;
num1=num2;

console.log(num1);

const student={
    name:'Jones',
    age:'26',
};
console.log(student);

const otherStudent= student;
otherStudent.name="Dan Brown";
console.log(otherStudent);
