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
};
