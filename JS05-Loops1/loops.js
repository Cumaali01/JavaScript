// * FOR - LOOPS *

// for(let i= 1; i<=5; i++){
//   console.log(i);
// }

//! Soru: 1 den n e kadar olan sayıları topla

const n = Number(prompt("Bir sayi giriniz:"));

let toplam = 0;
for (let i = 1; i <= n; i++) {
  toplam += i;
  console.log(toplam, i);
}
console.log("Sonuc:", toplam);

//! Soru2: 0-100 arasindaaa 10 adet rastgele sayi üreten for döngüsü

for (let i = 1; i <= 10; i++) {
  const rastgele = Math.round(Math.random() * 100);
  console.log(rastgele);
}
//* Math.floor() => alt tam sayiya yuvarlar
//* Math.ceil() => ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar
//* Math.trunc() => kesirli sayinin tam kesimini alir

//? Quest: Dışarıdan girilen bir saiyinin asal olup olmadığını tespit

const sayi = Number(prompt("Enter a positive number:"));
let asal = true;

if (sayi <= 1) {
  alert("Sayi 1'den büyük olmalidir!!!");
} else {
  for (let i = 2; i < sayi; i++) {
    if(sayi%i===0){
      asal=false;
      break;
    }
  }
  const sonuc = asal===true?"ASALDIR" : "ASAL DEGILDIR";
  console.log(`${sayi} ${sonuc}`);
}
