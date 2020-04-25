import { SECTOR_ABUDHABI, CODE, MODAL_ABUDHABI } from "../utils/Types";

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
