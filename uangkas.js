const prompt = require("prompt-sync")();

let data = [];

function inputPemasukan() {
    const nama = prompt("Nama: ");
    const jumlah = parseInt(prompt("Jumlah: "));
    data.push({ tipe: "uang", nama, jumlah });
}