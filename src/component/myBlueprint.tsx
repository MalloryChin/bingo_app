import React, { useState } from 'react';
import { Button, Overlay } from '@blueprintjs/core';

function MyBlueprint() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleOverlay() {
		//TODO
		setIsOpen(!isOpen);
	}
	return (
		<div>
			<button>click me</button>
			<Button intent="success" text="button content" />
			<Button icon="refresh" />
			<Button className="bp3-button bp3-large">Dont do this!</Button>
			<Button text="Show overlay" onClick={toggleOverlay} />
			<Overlay isOpen={isOpen}>
				<div className="overlay-box">
					<div className="center-div">
						<div id="victory-text">勝利！</div>
						<Button id="restart-btn" text="重新開始" onClick={toggleOverlay} />
					</div>
				</div>
			</Overlay>
		</div>
	);
}

export default MyBlueprint;
