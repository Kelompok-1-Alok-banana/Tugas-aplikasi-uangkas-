const readline = require('readline');
const { tambahTransaksi, lihatTransaksi, transaksi } = require('./transaksi');
const { urutkanTransaksi, cariTransaksi } = require('./algoritma');
const { tampilkanSaldo } = require('./saldo');
const { saveData, loadData } = require('./storage');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Load data dari file saat aplikasi dibuka
loadData();

function menu() {
  console.log("\n=== APLIKASI UANG KAS ===");
  console.log("1. Tambah Transaksi");
  console.log("2. Lihat Transaksi");
  console.log("3. Urutkan Transaksi (Bubble Sort)");
  console.log("4. Cari Transaksi (Binary Search)");
  console.log("5. Lihat Saldo");
  console.log("0. Keluar");

  rl.question("Pilih menu: ", (pilih) => {
    switch (pilih) {
      case '1': tambahTransaksi(rl, menu); break;
      case '2': lihatTransaksi(menu); break;
      case '3': urutkanTransaksi(menu); break;
      case '4': cariTransaksi(rl, menu); break;
      case '5': tampilkanSaldo(menu); break;
      case '0':
        saveData();
        console.log("Terima kasih telah menggunakan aplikasi uang kas!");
        rl.close();
        break;
      default:
        console.log("Pilihan tidak valid.");
        menu();
    }
  });
}

menu();