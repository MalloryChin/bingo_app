import React, { useContext } from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';
import { formContext } from './AppWeek2';
import { Button} from '@blueprintjs/core';

interface BPtableProps {
	onClick: (i: number) => void;
}

function BPtable(Props: BPtableProps) {
	const context = useContext(formContext);
	const columnNames = ['姓名','手機','email','生日',''];

	const cellRenderer = (rowIndex: number, colIndex: number) => {
		return <Cell>{context[rowIndex][colIndex]}</Cell>;
	};

	const deleteBtnRenderer = (rowIndex: number) => {
		return (
			<Cell>
				<>
					<Button icon="delete" onClick={() => Props.onClick(rowIndex)}/>
				</>
			</Cell>
		);
	};

	const columns = columnNames.map((columnName) => {
		if(columnName) {
			return (
				<Column key={columnName} name={columnName} cellRenderer={cellRenderer} />
			);
		} else {
			return (
				<Column key={columnName} name={columnName} cellRenderer={deleteBtnRenderer} />
			);
		}

	});

	const numRows = context.length;
	return (
		<Table numRows={numRows} defaultRowHeight={30}>
			{columns}
		</Table>
	);
}

export default BPtable;
