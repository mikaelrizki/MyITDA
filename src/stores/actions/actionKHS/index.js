export function setNilaiKHS (data) {
    return {
        type: "@APP/KHS/SET_NILAI",
        payload: data,
    };
}

export function resetNilaiKHS () {
    return {
        type: "@APP/KHS/RESET_NILAI"
    }
}

export function setYearnSmt (data) {
    return {
        type: "@APP/KHS/SET_YEAR",
        payload: data,
    }
}

export function resetYearnSmt () {
    return {
        type: "@APP/KHS/RESET_YEAR"
    }
}