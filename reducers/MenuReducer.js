import { DARK } from "../utils/Types";

const initial_state = {
  isDark: false,
};

const menuReducer = (state = initial_state, action) => {
  switch (action.type) {
    case DARK:
      return {
        ...state,
        isDark: action.payload,
      };
  }

  return state;
};

export default menuReducer;
