const fs = require('fs');
const path = './data.json';
const { transaksi } = require('./transaksi');

function saveData() {
  fs.writeFileSync(path, JSON.stringify(transaksi, null, 2));
  console.log("💾 Data berhasil disimpan ke file data.json");
}

function loadData() {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path);
    const json = JSON.parse(data);
    transaksi.push(...json);
    console.log("📂 Data berhasil dimuat dari file data.json");
  }
}

module.exports = { saveData, loadData };