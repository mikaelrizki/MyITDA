export function setDataBeasiswa (data) {
    return {
        type: "@APP/BEASISWA/SET_DATA",
        payload: data,
    };
}

export function resetDataBeasiswa () {
    return {
        type: "@APP/BEASISWA/RESET_DATA"
    }
}