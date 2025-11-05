const transaksi = [];

function tambahTransaksi(rl, callback) {
  rl.question("Nama anggota: ", (nama) => {
    rl.question("Jumlah (positif = masuk, negatif = keluar): ", (jml) => {
      const jumlah = parseFloat(jml);
      if (isNaN(jumlah)) {
        console.log("Jumlah harus berupa angka.");
        return callback();
      }
      transaksi.push({ nama, jumlah });
      console.log("✅ Transaksi berhasil ditambahkan!");
      callback();
    });
  });
}

function lihatTransaksi(callback) {
  console.log("\n=== DAFTAR TRANSAKSI ===");
  if (transaksi.length === 0) {
    console.log("Belum ada transaksi.");
  } else {
    transaksi.forEach((t, i) => {
      console.log(${i + 1}. ${t.nama} : ${t.jumlah});
    });
  }
  callback();
}

module.exports = { transaksi, tambahTransaksi, lihatTransaksi };