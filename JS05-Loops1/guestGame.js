//* Program 0-100 arasında rastgele bir sayı tutacak ce kullanıcının bu sayıyı 5 kere (hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek vee ARTTIR ya da AZALT diyerek kullanıcıyı yönlendirecektir. Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler... denemede bildiniz" yazacaktır.

let hak = 5;
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);

let tahmin;
do {
   tahmin = Number(prompt("Lütfen 0-100 arasında bir sayı tahmin ediniz:"));
  hak -= 1;
  if (tahmin === rastgele) {
    console.log(`Tabrikler ${5 - hak} kerede bildiniz`);
    break;
  } else if (tahmin < rastgele) {
    console.log("ARTTIR 🔼");
  } else {
    console.log("AZALT 🔽");
  }
} while (hak > 0);

if(tahmin !== rastgele){
console.log("Üzgünüz oyunu kaybettiniz 😔😓");
}

//* Oyuna devam etmek ister misiniz? E ya da e ye basarak tekrardan başlayabilirsiniz Q ya da q ya basarak sonlandırabilrsiniz

