import React, {useContext} from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';

export const formContext = React.createContext<any[]>([]);

function BPtable() {
	const context = useContext(formContext);

	const cellRenderer = (rowIndex: number) => {
		return <Cell>{context[rowIndex]}</Cell>;
	};

	const numRows = context.length;
	return (
		<Table numRows={numRows}>
			<Column name="name" cellRenderer={cellRenderer} />
		</Table>
	);
}

export default BPtable;
