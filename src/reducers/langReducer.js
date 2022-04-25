import { spanish, english } from "../translate/languages";
import { types } from "../types/types";

const lsLang = localStorage.getItem("lang");
const actualLang = lsLang
  ? lsLang
  : window?.navigator?.language?.includes("es")
  ? "es"
  : "en";

const defLanguage = actualLang === "es" ? spanish : english;

localStorage.setItem("lang", actualLang === "es" ? "es" : "en");

const initialState = {
  pageContent: defLanguage,
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.en:
      localStorage.setItem("lang", "en");
      return {
        pageContent: action.payload,
      };
    case types.es:
      localStorage.setItem("lang", "es");
      return {
        pageContent: action.payload,
      };
    default:
      return state;
  }
};
