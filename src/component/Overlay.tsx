import React, {useContext} from 'react';

export const OverlayContext = React.createContext(false);

interface OverlayProps {
	onClick: () => void;
}

function Overlay(props: OverlayProps) {
	const context = useContext(OverlayContext);

	let overlayClass = 'game-overlay';
	if(context) {
		overlayClass = 'game-overlay overlay-on';
	}


	return (
		<div className={overlayClass}>
			<div className="center-div">
				<div id="victory-text">勝利！</div>
				<button id="restart-btn" onClick={() => props.onClick()}>
					重新開始
				</button>
			</div>
		</div>
	);
}

export default Overlay;
