const formatRupiah = (number) => {
  return `Rp ${number.toLocaleString("id-ID")}`;
};

const renderSemester = (tahun, semester) => {
  tahun = `${tahun}/${tahun + 1}`;
  semester = semester === 1 ? "Gasal" : "Genap";
  return `${semester} ${tahun}`;
};

const formatTanggalIndonesia = (tanggal) => {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export { formatRupiah, renderSemester, formatTanggalIndonesia };
