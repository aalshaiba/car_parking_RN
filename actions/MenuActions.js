import { DARK } from "../utils/Types";

export const setDark = (bool) => {
  return {
    type: DARK,
    payload: bool,
  };
};
