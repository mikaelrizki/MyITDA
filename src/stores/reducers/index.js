import { combineReducers } from "redux";
import dataAuth from "./dataAuth/index.js";
import dataPayment from "./dataPayment/index.js";
import dataBeasiswa from "./dataBeasiswa/index.js";

const rootReducer = combineReducers({
    dataAuth,
    dataPayment,
    dataBeasiswa,
});

export default rootReducer;
