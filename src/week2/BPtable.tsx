import React, { useContext, useState } from 'react';
import { Cell, Column, Table, ColumnHeaderCell, Utils } from '@blueprintjs/table';
import { FormContext } from './AppWeek2';
import { User, cUserNameConvention } from './interfaces';
import { Button } from '@blueprintjs/core';

// interface BPtableProps {
// 	/**
// 	 * 移除使用者 by record 的 index
// 	 */
// 	onRemoveUser: (deleteIndex: number) => void;
// }

type TableCon = keyof User | 'option';

// 型別 Record<key, value>
const cTableConvention: Record<TableCon, string> = {
	...cUserNameConvention,
	option: '選項',
};

function BPtable() {
	const context = useContext(FormContext);
	const { records, removeUser } = context;
	// let tableKeys = Object.keys(cTableConvention) as TableCon[];
	const [tableKeys, setTableKeys] = useState(Object.keys(cTableConvention) as TableCon[]);
	const cellRenderer = (rowIndex: number, colIndex: number) => {
		const field = tableKeys[colIndex];
		if (field === 'option') {
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

	const handleColumnsReordered = (oldIndex: number, newIndex: number, length: number) => {
		if (oldIndex === newIndex) {
			return;
		}
		setTableKeys(Utils.reorderArray(tableKeys, oldIndex, newIndex, length));
	};

	return (
		<Table
			enableColumnReordering={true}
			numRows={records.length}
			defaultRowHeight={30}
			enableColumnInteractionBar={true}
			onColumnsReordered={handleColumnsReordered}
		>
			{columns}
		</Table>
	);
}

export default BPtable;
