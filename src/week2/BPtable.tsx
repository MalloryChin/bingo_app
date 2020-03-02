import React, { useContext } from 'react';
import { Cell, Column, Table, ColumnHeaderCell } from '@blueprintjs/table';
import { FormContext, User, cUserNameConvention } from './AppWeek2';
import { Button } from '@blueprintjs/core';

// interface BPtableProps {
// 	/**
// 	 * 移除使用者 by record 的 index
// 	 */
// 	onRemoveUser: (deleteIndex: number) => void;
// }

type TableCon = keyof User | 'option';

const cTableConvention: Record<TableCon, string> = {
	...cUserNameConvention,
	option: '選項',
};

function BPtable() {
	const context = useContext(FormContext);
	const { records, removeUser } = context;
	const tableKeys = Object.keys(cTableConvention) as TableCon[];
	const cellRenderer = (rowIndex: number, colIndex: number) => {
		const field = tableKeys[colIndex];
		if(field === 'option') {
			return (
				<Cell>
					{/* 因為 BLUEPRINT 會掛上奇怪的 props，所以要掛一個空的才不會有 error */}
					<>
						<Button icon="delete" onClick={() => removeUser(rowIndex)} />
					</>
				</Cell>
			);
		}
		return <Cell>{records[rowIndex][field]}</Cell>;
	};


	const columns = tableKeys.map((columnName) => {
		return (
			<Column
				columnHeaderCellRenderer={() =>
					<ColumnHeaderCell>{cTableConvention[columnName]}</ColumnHeaderCell>
				}
				key={columnName}
				name={columnName}
				cellRenderer={cellRenderer}
			/>
		);
	});

	return (
		<Table numRows={records.length} defaultRowHeight={30} >
			{columns}
		</Table>
	);
}

export default BPtable;
