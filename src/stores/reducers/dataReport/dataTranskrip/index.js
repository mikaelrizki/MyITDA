const initialState = {
  dataTranskrip: [],
};

export default function dataTranskrip(state = initialState, action) {
  switch (action.type) {
    case "@APP/Transkrip/SET_NILAI":
      return {
        dataTranskrip: action.payload,
      };
    case "@APP/Transkrip/RESET_NILAI":
      return { dataTranskrip: {} };
    default:
      return state;
  }
}
