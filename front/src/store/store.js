import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import globalReducer from './reducers/globalReducer';

const store = createStore(globalReducer, applyMiddleware(thunkMiddleware));

export default store;
