const prompt = require("prompt-sync")();

let data = [];

function inputPemasukan() {
    const nama = prompt("Nama: ");
    const jumlah = parseInt(prompt("Jumlah: "));
    data.push({ tipe: "uang", nama, jumlah });
}

function inputPengeluaran() {
    const nama = prompt("Keperluan: ");
    const jumlah = parseInt(prompt("Jumlah: "));
    data.push({ tipe: "keluar", nama, jumlah });
}

function outputData() {
    data.forEach(d => {
        console.log(`[${d.tipe}] ${d.nama} = Rp${d.jumlah}`);
    });
}

function menu() {
    while (true) {
        console.log("1. Pemasukan");
        console.log("2. Pengeluaran");
        console.log("3. Lihat data");
        console.log("4. Keluar");

        const pilih = prompt("Pilih: ");
        if (pilih == "1") inputPemasukan();
        else if (pilih == "2") inputPengeluaran();
        else if (pilih == "3") outputData();
        else if (pilih == "4") break;
    }
}

menu();