const initialState = {
    dataKHS: [],
    dataYearnSmt : []
  };
  
  export default function dataKHS(state = initialState, action) {
    switch (action.type) {
      case "@APP/KHS/SET_NILAI":
        return {
          ...state,
          dataKHS: action.payload,
        };
      case "@APP/KHS/RESET_NILAI":
        return { dataKHS: {} };
      case "@APP/KHS/SET_YEAR":
        return { 
          ...state,
          dataYearnSmt: action.payload };
      case "@APP/KHS/RESET_YEAR":
        return { dataYearnSmt: {} }; 
      default:
        return state;
    }
  }