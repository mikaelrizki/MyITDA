import axios from "axios";

export default {
  async getAuth(nim, password) {
    try {
      const formData = new FormData();
      formData.append("username", nim);
      formData.append("password", password);

      const response = await axios.post(
        "https://perpustakaan.itda.ac.id/api/json_login.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("[API] GetAuth Success", response.data["data"][0].result);
      return response.data["data"][0].result;
    } catch (error) {
      console.error("[API] GetAuth error", error);
      return false;
    }
  },

  async getDataMahasiswa() {
    try {
      const response = await axios.get(
        "https://perpustakaan.itda.ac.id/api/json_all_mhs.php"
      );
      console.log("[API] GetDataMahasiswa", response.data["data"]);
      return response.data["data"];
    } catch (error) {
      console.error("[API] GetDataMahasiswa error", error);
    }
  },

  async getDataBeasiswa(nim) {
    try {
      const response = await axios.get(
        `https://perpustakaan.itda.ac.id/api/json_mhs_beasiswa.php?nim=${nim}`
      );
      console.log("[API] GetDataBeasiswa", response.data);
      return response.data;
    } catch (error) {
      console.error("[API] GetDataBeasiswa error", error);
    }
  },

  async getDataPayment(nim) {
    try {
      const response = await axios.get(
        `https://perpustakaan.itda.ac.id/api/json_tagihan_ukt.php?nim=${nim}`
      );
      console.log("[API] GetDataPayment", response.data);
      return response.data;
    } catch (error) {
      console.error("[API] GetDataPayment error", error);
    }
  },

  async getDataTranskrip(nim) {
    try {
      const response = await axios.get(
        "https://perpustakaan.itda.ac.id/api/json_nilai_transkrip_mhs.php",
        {
          params: {
            nim: nim,
          },
        }
      );
      console.log("[API] GetDataTranskrip", response.data["data"]);
      return response.data["data"];
    } catch (error) {
      console.error("[API] GetDataTranskrip error", error);
    }
  },

  async getDataKHS(nim, kd_ta, kd_smt) {
    try {
      const response = await axios.get(
        "https://perpustakaan.itda.ac.id/api/json_nilai_khs.php",
        {
          params: {
            nim: nim,
            kd_ta: kd_ta,
            kd_smt: kd_smt,
          },
        }
      );
      console.log("[API] GetDataKHS", response.data["data"]);
      return response.data["data"];
    } catch (error) {
      console.error("[API] GetDataKHS error", error);
    }
  },

  async getDataYearnSmt(nim) {
    try {
      const response = await axios.get(
        "https://perpustakaan.itda.ac.id/api/json_nilai_transkrip_mhs.php",
        {
          params: { nim },
        }
      );

      console.log("YEAR ADAPTER:", nim);
      console.log("[API] getYearnSMT", response.data["data"]);

      const dataYear = response.data["data"];

      // Struktur data menjadi array list
      const structuredData = [];

      dataYear.forEach((item) => {
        const yearEntry = structuredData.find(
          (entry) => entry.year === item.kd_ta
        );
        if (yearEntry) {
          // Jika tahun sudah ada di list, tambahkan semester jika belum ada
          if (!yearEntry.semesters.includes(item.kd_smt)) {
            yearEntry.semesters.push(item.kd_smt);
          }
        } else {
          // Jika tahun belum ada di list, buat entry baru
          structuredData.push({
            year: item.kd_ta,
            semesters: [item.kd_smt],
          });
        }
      });

      // Urutkan data berdasarkan `year` dari terkecil ke terbesar
      structuredData.sort((a, b) => a.year - b.year);

      console.log(
        "[Structured Data] List format per Semester (Sorted):",
        structuredData
      );
      return structuredData;
    } catch (error) {
      console.error("[API] GetDataYear error", error);
    }
  },
};
