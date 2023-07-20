/*hai guys saya unbroken ingin mencoba mencoba sedikit 
funsi palindrome yang udh ka 
harkon kasih dengan ada variable
(kata) itu supaya kita bisa
memanggilnya dan memasukan string
ke dalam variable kata

contoh console.log(palindrome('string alias kata'));
terus tadi gua kepiran buat
variable kataterbalik aja hehe
soalnya emang ini kan //kata
terbalik yang jika kataterbalik
sama hasilnya dengan variable kata
maka dia true, jika enggak ya false
hehe
var check of kata adalah variable check adalah kata
jika kataterbalik = check + kataterbalik;
jadi intinya fungsi nya adalah jika
di jalankan jika kata katak di
masukan kedalam variable kata makan
akan seperti ini jika variable
check k maka kata terbalik akan k
jika check memberi a maka kata terbalik akan ak 
jika check memberi t maka kata terbalik akan tak 
jika check memberi a maka kata terbalik akan atak
jika check memberi k maka kata terbalik akan katak
terus return kata == kataterbalik;
jadi jika kata hasilnya sama dengan kata terbalik
maka hasilnya akan true jika tidak ya false
*/
function palindrome(kata) {
  var kataterbalik = '';
  for (var check of kata) {   
      kataterbalik = check + kataterbalik;   
      
  }  
  return kata === kataterbalik;
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic')); 
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister')); 
