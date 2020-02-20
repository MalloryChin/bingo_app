import React, {useRef, useState} from 'react';

function Test() {
	const refContainer = useRef<string>('123');
	const [value, setValue] = useState(123);
	const onButtonClick = () => {
		refContainer.current = 'new';
	};
	return (
		<div>
			{refContainer.current}
			<button onClick={onButtonClick}>click me</button>
			{value}
			<button onClick={() => setValue(456)}>click me</button>
		</div>
	);
}

export default Test;
