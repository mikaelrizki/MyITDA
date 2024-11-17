const initialState = {
  dataMahasiswaSelected: {},
};
export default function dataMahasiswa(state = initialState, action) {
  switch (action.type) {
    case "@APP/MAHASISWA/SET_DATA":
      return {
        ...state,
        dataMahasiswaSelected: action.payload,
      };
    case "@APP/MAHASISWA/RESET_DATA":
      return initialState;
    default:
      return state;
  }
}
