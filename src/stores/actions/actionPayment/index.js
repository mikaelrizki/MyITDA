export function setDataPayment (data) {
    return {
        type: "@APP/PAYMENT/SET_DATA",
        payload: data,
    };
}

export function resetDataPayment () {
    return {
        type: "@APP/PAYMENT/RESET_DATA"
    }
}