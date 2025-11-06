function formatRupiah(angka) {
  return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function isValidNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = { formatRupiah, isValidNumber};