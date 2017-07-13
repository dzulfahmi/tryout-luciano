/*
 * Coded by Fitra Zul Fahmi
 * Bootcamp Refactory Batch 4
 */

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
var fl = require('fs')
  , filename = process.argv[2];

fl.readFile(filename,'utf8', function(err, data){
  if(err) throw err;

  //console.log("Read File : " + data.toString());
  var datanya = data.toString();
  var splitdata = datanya.split(" ");
  //Jumlah semua kata
  var jmlString = splitdata.length;
  var unique = splitdata.filter( onlyUnique );
  var cekUnik = jumUnik(splitdata);
  var numbr = cekNumber(unique);
  var summ = CalcAngka(numbr);

  console.log("Jumlah semua kata : " + jmlString );
  console.log("Jumlah kata unik : " + unique.length );
  console.log("Jumlah kata yang unik dan jumlahnya masing-masing : ");
  console.log(cekUnik);
  console.log("Ada "+numbr.length+" angka: " + numbr);
  console.log("Jumlah semua angka: "+summ);
});
//Get kata unik
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function jumUnik(arr) {
  var counts = {};
  for (var i = 0; i < arr.length-1; i++) {
      counts[arr[i]] = 1 + (counts[arr[i]] || 0);
  }
  return counts;
}

function cekNumber(arr){
  var numm = [];
  for (var i = 0;i< arr.length-1;i++){
    if (isFinite(arr[i]) === true){
      numm.push(arr[i]);
    }
  }
  return numm;
}

function CalcAngka(arr) {
  var sum = 0;
  for (var i=0;i<arr.length;i++){
    sum = sum + parseInt(arr[i]);
  }
  return sum;
}
