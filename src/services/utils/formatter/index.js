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

const formatDateAnnouncement = (tglMasuk, tglSelesai) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  const tglMasukArr = tglMasuk.split("-");
  const tglSelesaiArr = tglSelesai.split("-");
  if (tglMasukArr[1] === tglSelesaiArr[1]) {
    return `${tglMasukArr[2]} - ${tglSelesaiArr[2]} ${
      months[parseInt(tglMasukArr[1]) - 1]
    } ${tglMasukArr[0]}`;
  } else {
    return `${tglMasukArr[2]} ${months[parseInt(tglMasukArr[1]) - 1]} - ${
      tglSelesaiArr[2]
    } ${months[parseInt(tglSelesaiArr[1]) - 1]} ${tglMasukArr[0]}`;
  }
};

export {
  formatRupiah,
  renderSemester,
  formatTanggalIndonesia,
  formatDateAnnouncement,
};
