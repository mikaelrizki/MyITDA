const initialState = {
  dataLogin: {},
  loginDate: null,
};

export default function dataAuth (state = initialState, action) {
  switch (action.type) {
    case "@APP/AUTH/SET_DATA":
      return {
        dataLogin: action.payload,
        loginDate: new Date(),
      };
    case "@APP/AUTH/RESET_DATA":
      return { dataLogin: {}, loginDate: null };
    default:
      return state;
  }
};
