import React, { useState } from 'react';
import { NumericInput } from '@blueprintjs/core';

interface InputFormProps {
	values: number[];
	onClick: (i: number) => void;
}

function InputForm(props: InputFormProps) {
	const [inputValue, setValue] = useState();

	function handleSubmit(event: React.FormEvent) {
		const values = props.values;
		const selectedIndex = values.indexOf(inputValue);
		props.onClick(selectedIndex);
		event.preventDefault();
	}

	return (
		<form className="userPrompt" onSubmit={handleSubmit}>
			<NumericInput
				placeholder='enter a number'
				min={1}
				max={16}
				value={inputValue}
				onValueChange={v => setValue(v)}
			/>
		</form>
	);
}

export default InputForm;
