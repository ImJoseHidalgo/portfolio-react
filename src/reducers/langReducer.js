import { spanish } from '../translate/languages';
import { types } from '../types/types';

const initialState = {
  pageContent: spanish
}

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.en:
      return {
        pageContent: action.payload
      }
    case types.es:
      return {
        pageContent: action.payload
      }
    default:
      return state;
  }
}