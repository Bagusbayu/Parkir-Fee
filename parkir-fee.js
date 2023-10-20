const moment = require('moment');
const readline = require('readline-sync');

function hitungBiayaParkir(masuk, keluar) {
  const formatWaktu = 'YYYY-MM-DD HH:mm:ss';
  const masukWaktu = moment(masuk, formatWaktu);
  const keluarWaktu = moment(keluar, formatWaktu);
  const durasiJam = keluarWaktu.diff(masukWaktu, 'hours', true);
  console.log('durasiJam: ', durasiJam);
  let biaya = 7000; // Biaya awal

  if (durasiJam > 12) {
    biaya += 3000;
    if (durasiJam > 24) {
      biaya += 7000;
      if (durasiJam > 36) {
        biaya += 3000 * Math.ceil((durasiJam - 36) / 12);
      }
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
