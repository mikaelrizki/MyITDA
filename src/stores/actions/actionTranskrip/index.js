export function setNilaiTranskrip (data) {
    return {
        type: "@APP/Transkrip/SET_Nilai",
        payload: data,
    };
}

export function resetNilaiTranskrip () {
    return {
        type: "@APP/Transkrip/RESET_Nilai"
    }
}