import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { langReducer } from '../reducers/langReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  lang: langReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);