import { REQUEST_MOVE, RECEIVE_MOVE, LOAD_GAME } from '../action/gameActions';

const initialState = {
    board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_MOVE: return action.game;
        case LOAD_GAME: return action.game;
        case REQUEST_MOVE:
        default: return state;
    }
};

export default gameReducer;
