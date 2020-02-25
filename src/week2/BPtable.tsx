import React, { useContext } from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';
import {formContext} from './AppWeek2';

function BPtable() {
	const context = useContext(formContext);

	const cellRenderer = (rowIndex: number, colIndex: number) => {
		return <Cell>{context[rowIndex][colIndex]}</Cell>;
	};

	const numRows = context.length;
	return (
		<Table numRows={numRows}>
			<Column name="姓名" cellRenderer={cellRenderer} />
			<Column name="手機" cellRenderer={cellRenderer} />
			<Column name="email" cellRenderer={cellRenderer} />
			<Column name="生日" cellRenderer={cellRenderer} />
		</Table>
	);
}

export default BPtable;
