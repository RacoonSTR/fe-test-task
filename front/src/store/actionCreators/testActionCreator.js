import { TEST_ACTION } from '../action/testActions';

class TestActionCreator {
    static testAction(value) {
        return {
            type: TEST_ACTION,
            value,
        };
    }
}

export default TestActionCreator;
