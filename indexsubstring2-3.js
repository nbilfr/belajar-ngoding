let word = 'wow JavaScript is so cool';
/* 
saya di kasih contoh dari pa harcon langsung paham ini kayak gimana
ini kita itung setiap kata di mulai dari nol
cara memanggilnya word[urutan angka]
kenapa ada angka yang di lewat seperti 0 , 1 ,2,4 ,5 dll
mana tiganya karena tiganya itu spasi mas bro dan seterusnya


w itu 0 ,  o itu 1 , dan w itu 2
-------
untuk soal 3 sama tapi cuma di ganti memakai substring
contoh javascript
cuma bedanya substring itu misalnya 0,4 dia akan ter print sebagai java bukan jav seperti di soal kedua
*/
let exampleFirstWord = word[0] + word[1] + word[2];
let exempleFirstWord3 = word.substring(0, 3);
let exampleKeduaWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
let substringkedua = word.substring(4,14);
let exampleKetigaWord = word[15] + word[16];
let substringketiga = word.substring(15, 17);
let exampleKeempatWord = word[18] + word[19];
let substringkeempat = word.substring(18, 20);
let exampleKelimaWord = word[21] + word[22] + word[23] + word[24];
let substringkelima = word.substring(21, 25);

console.log('First Word : ' + exampleFirstWord);
console.log('first Word3 : ' + exempleFirstWord3)
console.log('Kata kedua : ' + exampleKeduaWord);
console.log('Kata Kedua3 : ' + substringkedua);
console.log('kata ketiga : ' + exampleKetigaWord);
console.log('Kata ketiga3 : ' + substringketiga);
console.log('kata keempat : ' + exampleKeempatWord);
console.log('Kata keempat3 : ' + substringkeempat);
console.log('kata kelima : ' + exampleKelimaWord);
console.log('Kata kelima3 : ' + substringkelima);
