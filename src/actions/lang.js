import { types } from "../types/types";
import { english, spanish } from "../translate/languages";

export const setEnglish = () => {
  return {
    type: types.en,
    payload: english
  }
}

export const setEspanish = () => {
  return {
    type: types.es,
    payload: spanish
  }
}