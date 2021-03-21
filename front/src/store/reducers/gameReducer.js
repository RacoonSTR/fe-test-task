import { REQUEST_MOVE, RECEIVE_MOVE, LOAD_GAME } from '../action/gameActions';

const initialState = {};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_MOVE: return action.game;
        case LOAD_GAME: return action.game;
        case REQUEST_MOVE:
        default: return state;
    }
};

export default gameReducer;
