import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function GameBoard(props) {
    const { board } = props;

    return (
        <div className="container">
            {board.map((row) => (
                <div className="row">
                    {row.map((value) => <BoardField value={value} />)}
                </div>
            ))}
        </div>
    );
}

GameBoard.propTypes = {
    board: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    ).isRequired,
};

function BoardField(props) {
    const { value } = props;
    return <div className="col-4">{value}</div>;
}

BoardField.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

function mapStateToProps(state) {
    return {
        board: state.game.board,
    };
}

function mapDispatchToProps() {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
