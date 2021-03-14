import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './reducers/globalReducer';

const store = createStore(globalReducer, applyMiddleware([thunk]));

export default store;
