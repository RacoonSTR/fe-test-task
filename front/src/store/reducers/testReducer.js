import { TEST_ACTION } from '../action/testActions';

const testReducer = (state = {}, action) => {
    switch (action.type) {
        case TEST_ACTION: return { value: action.value };
        default: return state;
    }
};

export default testReducer;
