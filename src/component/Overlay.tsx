import React, {useContext} from 'react';
import { Button, Overlay } from '@blueprintjs/core';

export const OverlayContext = React.createContext(false);

interface OverlayProps {
	onClick: () => void;
}

function BPOverlay(props: OverlayProps) {
	const context = useContext(OverlayContext);
	return (
		<Overlay isOpen={context}>
			<div className="overlay-box">
				<div className="center-div">
					<div id="victory-text">勝利！</div>
					<Button id="restart-btn" text="重新開始" onClick={() => props.onClick()} />
				</div>
			</div>
		</Overlay>
	);
}

export default BPOverlay;
