import React, {useRef, useState} from 'react';

function Test() {
	const refContainer = useRef<string>('123');
	const [value, setValue] = useState(123);
	const onButtonClick = () => {
		// content change won't cause re-render
		// change in branch
		// balalala
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

export function TextInputWithFocusButton() {
	const inputEl = useRef<HTMLInputElement>(null);
	const onButtonClick = () => {
		if(!inputEl.current)return ;
		inputEl.current.focus(); // `current` points to the mounted text input element
	};
	return (
	  <div>
			<input ref={inputEl} type="text" />
			<button onClick={onButtonClick}>Focus the input</button>
	  </div>
	);
}


