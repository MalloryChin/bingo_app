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

function TextInputWithFocusButton() {
	const inputEl = useRef<HTMLInputElement>(null);
	const onButtonClick = () => {
		// if(!inputEl.current)return ;
	  // `current` points to the mounted text input element
	  inputEl.current && inputEl.current.focus();
	};
	return (
	  <div>
			<input ref={inputEl} type="text" />
			<button onClick={onButtonClick}>Focus the input</button>
	  </div>
	);
}

export default Test;
