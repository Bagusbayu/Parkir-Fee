const moment = require('moment');
const readline = require('readline-sync');

function hitungBiayaParkir(masuk, keluar) {
  const formatWaktu = 'YYYY-MM-DD HH:mm:ss';
  const masukWaktu = moment(masuk, formatWaktu);
  const keluarWaktu = moment(keluar, formatWaktu);
  const durasiJam = keluarWaktu.diff(masukWaktu, 'hours', true);
  console.log('durasiJam: ', durasiJam);
  let biaya = 7000; // Biaya awal

  let durasiJamSisa = durasiJam;

  while (durasiJamSisa > 0) {
    console.log('durasiJamSisa > 0: ', durasiJamSisa > 0);
    if (durasiJamSisa < 12) {
      console.log('durasiJamSisa < 12: ', durasiJamSisa < 12);
      biaya += 7000;
      console.log('biaya += 7000: ', biaya += 7000);
      durasiJamSisa = 0;
      console.log('durasiJamSisa = 0: ', durasiJamSisa = 0);
    } else {
      biaya + 3000;
      console.log('biaya += 3000: ', biaya += 3000);
      durasiJamSisa -= 12;
      console.log('durasiJamSisa -= 12: ', durasiJamSisa -= 12);
    }
  }

 return biaya;
}

const masuk = readline.question('Masukkan waktu parkir masuk (YYYY-MM-DD HH:mm:ss): ');
const keluar = readline.question('Masukkan waktu parkir keluar (YYYY-MM-DD HH:mm:ss): ');

const biaya = hitungBiayaParkir(masuk, keluar);

if (biaya !== undefined) {
  console.log(`Biaya parkir: Rp ${biaya}`);
} else {
  console.log('Input times are not valid. Please check the format (YYYY-MM-DD HH:mm:ss).');
}
