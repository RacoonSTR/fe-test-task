import MOVE from '../action/gameActions';

class GameActionCreator {
    static testAction(value) {
        return {
            type: MOVE,
            value,
        };
    }
}

export default GameActionCreator;
