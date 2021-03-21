import GameActionCreator from '../actionCreators/gameActionCreator';

export default class GameMiddleware {
    static startNextGame() {
        return () => fetch('/api/game/next', { method: 'GET' }).then(() => this.loadGame());
    }

    static loadGame() {
        return (dispatch) => fetch('/game', { method: 'GET' }).then((res) => {
            dispatch(GameActionCreator.loadGame(res.body.game));
        });
    }

    static sendMove(value) {
        return (dispatch) => {
            dispatch(GameActionCreator.requestMove());
            return fetch('/api/game/move', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    index: value,
                }),
            }).then((res) => res.json()).then((data) => {
                dispatch(GameActionCreator.receiveMove(data.result));
            }).catch((err) => {
                console.log(err);
            });
        };
    }
}
