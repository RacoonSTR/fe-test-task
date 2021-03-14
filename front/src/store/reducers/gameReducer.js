import { MOVE } from '../action/gameActions';

const initialState = {
    board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE: return { value: action.value };
        default: return state;
    }
};

export default gameReducer;
