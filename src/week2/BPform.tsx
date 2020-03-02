import React, { useState, useContext } from 'react';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';
import { DateInput, IDateFormatProps } from '@blueprintjs/datetime';
import { FormContext } from './AppWeek2';
// eslint-disable-next-line no-warning-comments
// TODO: import moment from 'moment';

// interface BPFormProps {
// 	onAddUser: (i: User) => void;
// }

function BPform() {
	const context = useContext(FormContext);
	const { addUser } = context;
	const [name, setName] = useState<string>('');
	const [mobile, setPhone] = useState<string>('');
	const [email, setEmail] = useState('');
	const [bday, setBday] = useState<Date>(); //use Date type

	const jsDateFormatter: IDateFormatProps = {
		formatDate: date => date.toISOString(),
		parseDate: str => new Date(str),
		placeholder: 'M/D/YYYY',
	};

	function Submit() {
		if (name && mobile && email && bday) {
			addUser({
				name,
				mobile,
				email,
				birthday: bday.toLocaleDateString(),
			});
			//按下送出按鈕後清空欄位資料
			setName('');
			setPhone('');
			setEmail('');
			setBday(undefined);
		} else {
			alert('資料沒填或錯誤，請檢查！');
		}
	}

	return (
		<form>
			<FormGroup
				label="姓名"
				labelFor="text-input"
				inline
			>
				<InputGroup
					leftIcon="person"
					placeholder="輸入姓名"
					fill={false}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)}
					value={name}
				/>
			</FormGroup>
			<FormGroup
				label="手機"
				labelFor="number-input"
				inline
			>
				<InputGroup
					leftIcon="mobile-phone"
					placeholder="輸入手機號碼"
					fill={false}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
					}
					value={mobile}
					type="number"
				/>
			</FormGroup>
			<FormGroup
				label="email"
				labelFor="email-input"
				inline
			>
				<InputGroup
					leftIcon="envelope"
					placeholder="輸入email"
					onChange={
						(e: React.ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
					}
					value={email}
					type="email"
				/>
			</FormGroup>
			<FormGroup
				label="生日"
				labelFor="date-input"
				inline
			>
				<DateInput
					minDate={new Date(1900, 1, 1)}
					maxDate={new Date(Date.now())}
					value={bday}
					onChange={
						(date) => setBday(date)
					}
					{...jsDateFormatter}
				/>
			</FormGroup>
			<Button intent="primary" text="送出" onClick={Submit} />
		</form>
	);
}

export default BPform;
