import React, { useState } from 'react';
import BPform from './BPform';
import BPtable from './BPtable';

export const formContext = React.createContext<string[][]>([]);

function AppWeek2() {
	const [record, setRecord] = useState<string[][]>(
		[['default','0911111111','email@example.com','01/01/1999']],
	);
	function addRecord(data: string[]) {
		const myrecord = record.slice();
		myrecord.push(data);
		setRecord(myrecord);
	}
	function removeRecord(index: number) {
		const myrecord = record.slice();
		myrecord.splice(index, 1);
		setRecord(myrecord);
	}
	return (
		<div>
			<BPform
				onClick = {(data) => addRecord(data)}
			/>
			<formContext.Provider value={record}>
				<BPtable
					onClick = {(index) => removeRecord(index)}
				/>
			</formContext.Provider>
		</div>
	);
}

export default AppWeek2;
