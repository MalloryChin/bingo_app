import React, { useState } from 'react';
import BPForm from './BPform';
import BPTable from './BPtable';

export interface User {
	name: string;
	mobile: string;
	email: string;
	birthday: string;
}
export const cUserNameConvention: Record<keyof User, string> = {
	name: '姓名',
	mobile: '手機',
	email: 'email',
	birthday: '生日',
};

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
