const moment = require('moment');
const readline = require('readline-sync');

function hitungBiayaParkir(masuk, keluar) {
  const formatWaktu = 'YYYY-MM-DD HH:mm:ss';
  const masukWaktu = moment(masuk, formatWaktu);
  const keluarWaktu = moment(keluar, formatWaktu);
  const durasiJam = keluarWaktu.diff(masukWaktu, 'hours', true);

}


const masuk = readline.question('Masukkan waktu parkir masuk (YYYY-MM-DD HH:mm:ss): ');
const keluar = readline.question('Masukkan waktu parkir keluar (YYYY-MM-DD HH:mm:ss): ');

const biaya = hitungBiayaParkir(masuk, keluar);
console.log(`Biaya parkir: Rp ${biaya}`);
