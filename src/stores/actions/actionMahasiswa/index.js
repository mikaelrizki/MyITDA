export function setDataMahasiswa(data) {
    return {
        type: "@APP/MAHASISWA/SET_DATA",
        payload: data,
    };
};

export function resetDataMahasiswa() {
    return {
        type: "@APP/MAHASISWA/RESET_DATA"
    };
};