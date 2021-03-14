import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import GameBoard from './components/GameBoard';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <div>
                <GameBoard />
            </div>
        </Provider>
    );
}

export default App;
