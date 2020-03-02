import React, { useState } from 'react';
import BPForm from './BPform';
import BPTable from './BPtable';
import { User } from './interfaces';

interface AppContext {
	records: User[];
	addUser: (data: User) => void;
	removeUser: (i: number) => void;
}

export const FormContext = React.createContext<AppContext>({
	records: [],
	addUser: () => void 0,
	removeUser: () => void 0,
});

function AppWeek2() {
	const [records, setRecords] = useState<User[]>(
		[{
			name: 'default',
			mobile: '0911111111',
			email: 'email@example.com',
			birthday: '01/01/1999',
		}],
	);
	// .push會動到原本的陣列 [...records, data]回傳的是一個新的陣列
	const addUser = (data: User) => setRecords([...records, data]);

	function removeUser(index: number) {
		const myrecord = records.slice();
		myrecord.splice(index, 1);
		setRecords(myrecord);
	}
	return (
		<div>
			<FormContext.Provider value={{ records, addUser, removeUser }}>
				<BPForm />
				<BPTable />
			</FormContext.Provider>
		</div>
	);
}

export default AppWeek2;
