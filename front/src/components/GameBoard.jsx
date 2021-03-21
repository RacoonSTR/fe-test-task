import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameMiddleware from '../store/middlewares/gameMiddleware';

function GameBoard(props) {
    const { game, sendMove } = props;

    return (
        <div className="container">
            {game.board.map((row) => (
                <div className="row">
                    {row.map((value) => (
                        <BoardField
                            value={value}
                            onFieldClick={() => sendMove(value)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

GameBoard.propTypes = {
    game: PropTypes.shape({
        board: PropTypes.arrayOf(
            PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
        ),
    }).isRequired,
    sendMove: PropTypes.func.isRequired,
};

function BoardField(props) {
    const { value, onFieldClick } = props;
    const isDisabled = value === 'X' || value === 'O';
    const style = {};
    if (isDisabled) {
        style.backgroundColor = 'red';
    }
    return (
        <div className="col-4" style={style} onClick={!isDisabled ? onFieldClick : undefined} role="button" tabIndex="0">
            {value}
        </div>
    );
}

BoardField.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onFieldClick: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        game: state.game,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendMove: (value) => dispatch(GameMiddleware.sendMove(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
