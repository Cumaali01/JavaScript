const grade =prompt("Please enter your grade:");

if(grade>=0 && grade<=25){
    console.log(`Your grade is: "FF", you flanked!`);
}else if(grade>=26 && grade<=45){
    console.log(`your grade is: "DD", you could not pass the class!`);
}else if(grade>=46 && grade<=65){
    console.log(`Your grade is: "CC", you passed the class!`);
}
else if(grade>=66 && grade<=75){
    console.log(`Your grade is: "BB", you passed the class with good degree`);
}
else if(grade>=76 && grade<=90){
    console.log(`Your grade is: "BA", you passed the class with really good degree!`);
}
else if(grade>=91 && grade<=100){
    console.log(`Your grade is: "AA", you passed the class with highest degree, congratulations!`);
}else{
    console.log(`Inappropriate grade!`);
}