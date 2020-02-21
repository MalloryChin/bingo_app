import * as React from 'react';
import { Button } from '@blueprintjs/core';

interface SquareProps {
	value: number;
	selected: boolean;
	onClick: () => void;
}

function Square(props: SquareProps) {
	let className = 'square';
	if (props.selected) {
		className += ' selected_square .bp3-intent-danger';
	}
	return (
		<Button className={className} onClick={() => props.onClick()}>
			{props.value}
		</Button>
	);
}

export default Square;
