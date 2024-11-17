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
      const dataYear = response.data["data"];
      const structuredData = [];
  
      dataYear.forEach((item) => {
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
  
      console.log("[API] getYearnSMT", structuredData);
      return structuredData;
    } catch (error) {
      console.error("[API] GetDataYear error", error);
    }
  },  
};
