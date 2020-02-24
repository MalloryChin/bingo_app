import React, {useState} from 'react';
import { Button, FormGroup, InputGroup} from '@blueprintjs/core';
import { DateInput, IDateFormatProps } from '@blueprintjs/datetime';

interface BPformProps {
	onClick: (i: any) => void;
}

function BPform(Props: BPformProps){
	const jsDateFormatter: IDateFormatProps = {
		formatDate: date => date.toLocaleDateString(),
		parseDate: str => new Date(str),
		placeholder: 'M/D/YYYY',
	};
	const [name, setName] = useState('');

	function Submit(){
		if(name) {
			Props.onClick(name);
		};
		setName('');
	}

	return (
		<form>
			<FormGroup
				label="姓名"
				labelFor="text-input"
			>
				<InputGroup
					leftIcon="person"
					placeholder="輸入姓名"
					fill={false}
					onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
					value = {name}
				/>
			</FormGroup>
			<FormGroup
				label="手機"
				labelFor="number-input"
			>
				<InputGroup
					leftIcon="mobile-phone"
					placeholder="輸入手機號碼"
					fill={false}
					type="number"
				/>
			</FormGroup>
			<FormGroup
				label="email"
				labelFor="email-input"
			>
				<InputGroup
					leftIcon="envelope"
					placeholder="輸入email"
					fill={false}
					type="email"
				/>
			</FormGroup>
			<FormGroup
				label="生日"
				labelFor="date-input"
			>
				<DateInput
					fill={true}
					{...jsDateFormatter}
				/>
			</FormGroup>
			<Button intent="primary" text="送出" onClick={Submit}/>
		</form>
	);
}

export default BPform;
