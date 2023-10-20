const moment = require('moment');
const readline = require('readline-sync');

function hitungBiayaParkir(masuk, keluar) {
  const formatWaktu = 'YYYY-MM-DD HH:mm:ss';
  const masukWaktu = moment(masuk, formatWaktu);
  const keluarWaktu = moment(keluar, formatWaktu);
  const periodePertama = 12;  // Durasi periode pertama dalam jam
  const hargaPertama = 7000;
  const hargaTambahan = 3000;
  let durasiJam = keluarWaktu.diff(masukWaktu, 'hours', true);
  const hargaPerPeriode = [hargaPertama, hargaPertama + hargaTambahan];  // Harga per periode
  let biaya = 0;

  while (durasiJam > 0) {
    if (durasiJam <= periodePertama) {
      biaya += hargaPerPeriode[0];
    } else {
      biaya += hargaPerPeriode[0];
      biaya += hargaTambahan;
    }
    durasiJam -= periodePertama;
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
