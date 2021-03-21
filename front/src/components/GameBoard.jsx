import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameMiddleware from '../store/middlewares/gameMiddleware';

function GameBoard(props) {
    const { board, sendMove } = props;

    return (
        <div className="container">
            {board.map((row) => (
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
    board: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    ).isRequired,
    sendMove: PropTypes.func.isRequired,
};

function BoardField(props) {
    const { value, onFieldClick } = props;
    const style = {};
    if (value === 'X' || value === 'O') {
        style.backgroundColor = 'red';
    }
    return (
        <div className="col-4" style={style} onClick={onFieldClick} role="button" tabIndex="0">
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
        board: state.game.board,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendMove: (value) => dispatch(GameMiddleware.sendMove(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
