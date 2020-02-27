import React, { useState } from 'react';
import BPform from './BPform';
import BPtable from './BPtable';

export interface User {
	name: string;
	mobile: string;
	email: string;
	birthday: string;
}

export const formContext = React.createContext<User[]>([]);

function AppWeek2() {
	const [records, setRecords] = useState<User[]>(
		[{
			name: 'default',
			mobile: '0911111111',
			email: 'email@example.com',
			birthday: '01/01/1999',
		}],
	);
	const addUser = (data: User) => setRecords([...records, data]);

	function removeUser(index: number) {
		const myrecord = records.slice();
		myrecord.splice(index, 1);
		setRecords(myrecord);
	}
	return (
		<div>
			<BPform onAddUser={(data) => addUser(data)} />
			<formContext.Provider value={records}>
				<BPtable onRemoveUser={(index) => removeUser(index)} />
			</formContext.Provider>
		</div>
	);
}

export default AppWeek2;
