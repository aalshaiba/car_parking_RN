import { SECTOR_ABUDHABI, CODE, MODAL_ABUDHABI } from "../utils/Types";

const initial_state = {
  sector: "A11",
  code: 0,
  showModal: false,
};

const abuDhabiReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SECTOR_ABUDHABI:
      state = {
        ...state,
        sector: action.payload,
      };

    case CODE:
      state = {
        ...state,
        code: action.payload,
      };

    case MODAL_ABUDHABI:
      state = {
        ...state,
        showModal: action.payload,
      };
  }

  return state;
};

export default abuDhabiReducer;
