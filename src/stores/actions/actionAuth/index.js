export function setDataAuth (data) {
    return {
        type: "@APP/AUTH/SET_DATA",
        payload: data,
    };
}

export function resetDataAuth () {
    return {
        type: "@APP/AUTH/RESET_DATA"
    }
}