import axios from "axios";
import * as FileSystem from "expo-file-system";

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

  async getDataMhsbyNIM(nim) {
    try {
      const response = await axios.get(
        `https://perpustakaan.itda.ac.id/api/json_one_mhs.php?nim=${nim}`
      );
      console.log("[API] GetDataMhsbyNIM", response.data);
      return response.data["data"];
    } catch (error) {
      console.error("[API] GetDataBeasiswa error", error);
    }
  },

  async getDataPengumuman() {
    try {
      const response = await axios.get(
        "https://perpustakaan.itda.ac.id/api/json_berita_mhs.php?id=all"
      );
      console.log("[API] GetDataPengumuman", response.data["data"]);
      return response.data["data"];
    } catch (error) {
      console.error("[API] GetDataPengumuman error", error);
    }
  },

  async postPengumuman(judul, tgl_masuk, tgl_selesai, isi, fileUri, fileType) {
    try {
      console.log("[API] PostPengumuman", fileUri, fileType);

      const fileInfo = await FileSystem.getInfoAsync(fileUri);
      console.log("File info:", fileInfo);
      const fileName = fileUri.split("/").pop();

      const formData = new FormData();
      formData.append("judul", judul);
      formData.append("tgl_masuk", tgl_masuk);
      formData.append("tgl_selesai", tgl_selesai);
      formData.append("isi", isi);
      if (!fileInfo.exists) {
        console.error("File does not exist at the given URI");
      } else {
        formData.append("img", {
          uri: fileUri,
          type: fileType,
          name: fileName,
        });
      }

      console.log("[API] PostPengumuman Form Data", formData);

      const response = await axios.post(
        "https://mahasiswa.itda.ac.id/upload_berita.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("[API] PostPengumuman Success", response);

      return response;
    } catch (error) {
      console.error("[API] PostPengumuman error", error);
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error(
          "[API] PostPengumuman response error",
          error.response.data
        );
      } else if (error.request) {
        // Request was made but no response received
        console.error("[API] PostPengumuman request error", error.request);
      } else {
        // Something happened in setting up the request
        console.error("[API] PostPengumuman setup error", error.message);
      }
      return false;
    }
  },

  async deleteAnnouncement(id) {
    try {
      const response = await axios.get(
        `https://perpustakaan.itda.ac.id/api/json_hapus_berita.php?id=${id}`
      );
      console.log("[API] DeleteAnnouncement", response.data);
      return response.data;
    } catch (error) {
      console.error("[API] DeleteAnnouncement error", error);
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
      const dataYear = response.data["data"];
      const structuredData = [];

      dataYear?.forEach((item) => {
        const yearEntry = structuredData.find(
          (entry) => entry.year === item.kd_ta
        );
        if (yearEntry) {
          if (!yearEntry.semesters.includes(item.kd_smt)) {
            yearEntry.semesters.push(item.kd_smt);
          }
        } else {
          structuredData.push({
            year: item.kd_ta,
            semesters: [item.kd_smt],
          });
        }
      });

      structuredData.sort((a, b) => a.year - b.year);

      const loginDate = new Date();
      const currentMonth = loginDate.getMonth() + 1;

      if (structuredData.length > 0) {
        const lastYearData = structuredData[structuredData.length - 1];

        if (currentMonth >= 7 && currentMonth <= 12) {
          structuredData.push({
            year: (parseInt(lastYearData.year) + 1).toString(),
            semesters: ["1"],
          });
        } else if (currentMonth >= 1 && currentMonth <= 6) {
          if (!lastYearData.semesters.includes("2")) {
            lastYearData.semesters.push("2");
          }
        }
      } else {
        const currentYear = loginDate.getFullYear().toString();
        if (currentMonth >= 7 && currentMonth <= 12) {
          structuredData.push({
            year: currentYear,
            semesters: ["1"],
          });
        } else if (currentMonth >= 1 && currentMonth <= 6) {
          structuredData.push({
            year: (currentYear + 1).toString(),
            semesters: ["2"],
          });
        }
      }

      console.log("[API] GetYearnSMT", structuredData);
      return structuredData;
    } catch (error) {
      console.error("[API] GetDataYear error", error);
    }
  },
};
