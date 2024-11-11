export function setNilaiTranskrip (data) {
    return {
        type: "@APP/Transkrip/SET_NILAI",
        payload: data,
    };
}

export function resetNilaiTranskrip () {
    return {
        type: "@APP/Transkrip/RESET_NILAI"
    }
}