import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './component/Game';
import Test from './component/Test';
import MyBlueprint from './component/myBlueprint';

ReactDOM.render(
	<div>
		<Game
			size = {4}
		/>
		{/* <Test /> */}
		<MyBlueprint />
	</div>,
	document.getElementById('root'),
);

