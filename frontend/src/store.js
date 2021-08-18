import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { proListReducer, proDetailsReducer } from './reducers/proReducers';

//list
const initialState = {};
const reducer = combineReducers({
  proList: proListReducer,
  proDetails: proDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

//details



export default store;