const initialState = {
  dataBeasiswa: {},
};

export default function dataBeasiswa(state = initialState, action) {
  switch (action.type) {
    case "@APP/BEASISWA/SET_DATA":
      return {
        dataBeasiswa: action.payload,
      };
    case "@APP/BEASISWA/RESET_DATA":
      return initialState;
    default:
      return state;
  }
}
