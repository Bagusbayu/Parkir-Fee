const moment = require('moment');
const readline = require('readline-sync');

function calculateParkingFee(date_start, date_end, first_price, next_price, first_period, second_period) {
  const masukWaktu = moment(date_start, 'YYYY-MM-DD HH:mm:ss');
  const keluarWaktu = moment(date_end, 'YYYY-MM-DD HH:mm:ss');
  let total_hours = keluarWaktu.diff(masukWaktu, 'hours', true);
  let total_amount = 0;
  let amount_day = 0;
  let amount_hour = 0;

  const days = Math.floor(total_hours / (first_period + second_period))
  // console.log('days: ', days);

  amount_day += days * (first_price + next_price)

  const sisa_hour = total_hours % (first_period + second_period)
  // console.log('sisa_hour: ', sisa_hour);

  amount_hour += first_price

  if(sisa_hour >= second_period){
      amount_hour += next_price
  }

  total_amount = amount_day + amount_hour

  return total_amount;
}

const masuk = readline.question('Masukkan waktu parkir masuk (YYYY-MM-DD HH:mm:ss): ');
const keluar = readline.question('Masukkan waktu parkir keluar (YYYY-MM-DD HH:mm:ss): ');

const first_price = 7000;
const next_price = 3000;
const first_period = 12;
const second_period = 12;

const biaya = calculateParkingFee(masuk, keluar, first_price, next_price, first_period, second_period);

if (biaya !== undefined) {
  console.log(`Biaya parkir: Rp ${biaya}`);
} else {
  console.log('Input times are not valid. Please check the format (YYYY-MM-DD HH:mm:ss).');
}
