import { combineReducers } from 'redux';
import testReducer from './testReducer';
import gameReducer from './gameReducer';

const reducers = {
    testReducer,
    game: gameReducer,
};

const globalReducer = combineReducers(reducers);

export default globalReducer;
