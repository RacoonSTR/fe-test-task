import GameActionCreator from '../actionCreators/gameActionCreator';

export default class GameMiddleware {
    static startNextGame() {
        return () => fetch('/api/game/next', { method: 'GET' }).then(() => this.loadGame());
    }

    static loadGame() {
        return (dispatch) => fetch('/api/game', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json()).then((data) => {
            dispatch(GameActionCreator.loadGame(data.result));
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
