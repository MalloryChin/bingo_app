import React, { useContext } from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';
import {formContext} from './AppWeek2';

function BPtable() {
	const context = useContext(formContext);
	const columnNames = ['姓名','手機','email','生日'];

	const cellRenderer = (rowIndex: number, colIndex: number) => {
		return <Cell>{context[rowIndex][colIndex]}</Cell>;
	};

	const columns = columnNames.map((columnName) => {
		return (
			<Column key={columnName} name={columnName} cellRenderer={cellRenderer} />
		);
	});

	const numRows = context.length;
	return (
		<Table numRows={numRows}>
			{columns}
		</Table>
	);
}

export default BPtable;
