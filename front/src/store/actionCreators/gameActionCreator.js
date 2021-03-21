import { REQUEST_MOVE, RECEIVE_MOVE, LOAD_GAME } from '../action/gameActions';

class GameActionCreator {
    static loadGame(game) {
        return {
            type: LOAD_GAME,
            game,
        };
    }

    static requestMove() {
        return {
            type: REQUEST_MOVE,
        };
    }

    static receiveMove(game) {
        return {
            type: RECEIVE_MOVE,
            game,
        };
    }
}

export default GameActionCreator;
