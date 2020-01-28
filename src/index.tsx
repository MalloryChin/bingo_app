import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './component/Game';

ReactDOM.render(
  <Game
    len = {4}
  />,
  document.getElementById('root')
);
