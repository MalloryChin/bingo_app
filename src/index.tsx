import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './component/Game';

ReactDOM.render(
	<Game
		size = {4}
	/>,
	document.getElementById('root'),
);

