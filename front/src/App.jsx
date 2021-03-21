import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import GameBoard from './components/GameBoard';
import GameMiddleware from './store/middlewares/gameMiddleware';

function App({ game, loadGame }) {
    if (!game.board) {
        loadGame();
        return <div />;
    }
    return (
        <GameBoard />
    );
}

App.propTypes = {
    game: PropTypes.shape({
        board: PropTypes.arrayOf(
            PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
        ),
    }).isRequired,
    loadGame: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        game: state.game,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadGame: () => dispatch(GameMiddleware.loadGame()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
