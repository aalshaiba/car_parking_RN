import {
  SECTOR_ABUDHABI,
  CODE,
  MODAL_ABUDHABI,
  TOGGLE_PICKER,
} from "../utils/Types";

export const setSector = (sector) => {
  return {
    type: SECTOR_ABUDHABI,
    payload: sector,
  };
};

export const setCode = (code) => {
  return {
    type: CODE,
    payload: code,
  };
};

export const showModal = (bool) => {
  return {
    type: MODAL_ABUDHABI,
    payload: bool,
  };
};

export const showPicker = (bool) => {
  return {
    type: TOGGLE_PICKER,
    payload: bool,
  };
};
