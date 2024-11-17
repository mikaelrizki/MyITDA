import { combineReducers } from "redux";
import dataAuth from "./dataAuth/index.js";
import dataMahasiswa from "./dataMahasiswa/index.js";
import dataPayment from "./dataPayment/index.js";
import dataBeasiswa from "./dataBeasiswa/index.js";
import dataKHS from "./dataReport/dataKHS/index.js";
import dataTranskrip from "./dataReport/dataTranskrip/index.js";

const rootReducer = combineReducers({
    dataAuth,
    dataMahasiswa,
    dataPayment,
    dataBeasiswa,
    dataKHS,
    dataTranskrip
});

export default rootReducer;
