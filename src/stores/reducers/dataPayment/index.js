const initialState = {
  dataPayment: {},
};

export default function dataPayment(state = initialState, action) {
  switch (action.type) {
    case "@APP/PAYMENT/SET_DATA":
      return {
        dataPayment: action.payload,
      };
    case "@APP/PAYMENT/RESET_DATA":
      return initialState;
    default:
      return state;
  }
}
