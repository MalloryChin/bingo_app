import React, {useState} from 'react';
import { Button, FormGroup, InputGroup} from '@blueprintjs/core';
import { DateInput, IDateFormatProps } from '@blueprintjs/datetime';
// eslint-disable-next-line no-warning-comments
//TODO: import moment from 'moment';

interface BPformProps {
	onClick: (i: any) => void;
}

function BPform(Props: BPformProps){
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [bday,setBday] = useState<Date|undefined>(undefined); //use Date type

	const jsDateFormatter: IDateFormatProps = {
		formatDate: date => date.toLocaleDateString(),
		parseDate: str => new Date(str),
		placeholder: 'M/D/YYYY',
	};

	function Submit(){
		if(name && phone && email && bday) {
			Props.onClick([name, phone, email, bday.toLocaleDateString()]);
			setName('');
			setPhone('');
			setEmail('');
			setBday(undefined);
		} else {
			alert('有欄位沒填');
		}
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
					onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)}
					value = {name}
				/>
			</FormGroup>
			<FormGroup
				label="手機"
				labelFor="number-input"
			>
				<InputGroup
					leftIcon = "mobile-phone"
					placeholder = "輸入手機號碼"
					fill = {false}
					onChange = {
						(e: React.ChangeEvent<HTMLInputElement>) =>
							setPhone(e.target.value)
					}
					value = {phone}
					type = "number"
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
					onChange = {
						(e: React.ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
					}
					value = {email}
					type="email"
				/>
			</FormGroup>
			<FormGroup
				label="生日"
				labelFor="date-input"
			>
				<DateInput
					fill={true}
					minDate = {new Date(1900, 1, 1)}
					maxDate = {new Date(Date.now())}
					value={bday}
					onChange = {
						(date) => setBday(date)
					}
					{...jsDateFormatter}
				/>
			</FormGroup>
			<Button intent="primary" text="送出" onClick={Submit}/>
		</form>
	);
}

export default BPform;
