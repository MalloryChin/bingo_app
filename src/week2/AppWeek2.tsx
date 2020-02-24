import React, { useState } from 'react';
import BPform from './BPform';
import BPtable from './BPtable';
import {formContext} from './BPtable';

function AppWeek2() {
	const [record, setRecord] = useState<any[]>([]);
	function addRecord(name: string) {
		const myrecord = record.slice();
		myrecord.push(name);
		setRecord(myrecord);
	}
	return (
		<div>
			<BPform
				onClick = {(data) => addRecord(data)}
			/>
			<formContext.Provider value={record}>
				<BPtable />
			</formContext.Provider>
		</div>
	);
}

export default AppWeek2;
