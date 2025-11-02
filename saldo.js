const { transaksi } = require('./transaksi');

function tampilkanSaldo(callback) {
  const saldo = transaksi.reduce((acc, t) => acc + t.jumlah, 0);
  console.log("\n=== SALDO SAAT INI ===");
  console.log(Jumlah transaksi: ${transaksi.length});
  console.log(Saldo total: ${saldo});
  callback();
}

module.exports = { tampilkanSaldo };