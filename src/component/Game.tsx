//npm local storage ref: https://github.com/bevacqua/local-storage
import React, {useState, useEffect} from 'react';
import Overlay from './Overlay';
import { OverlayContext } from './Overlay';
import Board from './Board';
import InputForm from './InputForm';

interface GameProps {
	size: number;
}
const ls = require('local-storage');
function Game(props: GameProps) {

	const boardSize = props.size * props.size;
	// 給初始值前先檢查有沒有local storage
	// const [map, setmap] = useState(randomNumbers(boardSize));
	const [map, setmap] = useState(() => {
		const localMap = ls('board_numbers');
		return (
			localMap ? localMap : randomNumbers(boardSize)
		);
	});
	// const [selectedValues, setSelectedValues] = useState(
	// 	Array(boardSize).fill(false),
	// );
	const [selectedValues, setSelectedValues] = useState(() => {
		const localSelected = ls('playing_status');
		return (
			localSelected ? localSelected : Array(boardSize).fill(false)
		);
	});

	useEffect(() => {
		ls('board_numbers', map);
	}, [map]);

	useEffect(() => {
		ls('playing_status', selectedValues);
	},[selectedValues]);

	function handleClick(i: number) {
		const newSelectedValues = selectedValues.slice();
		newSelectedValues[i] = true;
		setSelectedValues(newSelectedValues);
	}

	function restart() {
		setmap(randomNumbers(boardSize));
		setSelectedValues(Array(boardSize).fill(false));
	}
	return (
		<div className="game">
			<OverlayContext.Provider value={bingo(props.size, selectedValues)}>
				<Overlay onClick={() => restart()} />
			</OverlayContext.Provider>
			<div className="game-main">
				<InputForm values={map} onClick={(i: number) => handleClick(i)} />
				<Board
					size={props.size}
					values={map}
					selectedValues={selectedValues}
					onClick={(i: number) => handleClick(i)}
				/>
			</div>
		</div>
	);
}


export default Game;


// ===============Helpers===================

function bingo(size: number, selectedSquare: boolean[]) {
	let lines = 0;

	for (let i = 0; i < size; i++) {
		let hline = true;
		let vline = true;
		for (let j = 0; j < size; j++) {
			if (!selectedSquare[i * size + j]) hline = false;
			if (!selectedSquare[i + j * size]) vline = false;
		}
		if (hline) lines++;
		if (vline) lines++;
	}

	let ldiagonal = true;
	let rdiagonal = true;
	for (let i = 0; i < size; i++) {
		if (!selectedSquare[i * size + i]) ldiagonal = false;
		if (!selectedSquare[i * size + (size - i - 1)]) rdiagonal = false;
	}
	if (ldiagonal) lines++;
	if (rdiagonal) lines++;

	if (lines >= 3) return true;
	else return false;
}

// return an array with n unique random numbers
function randomNumbers(n: number) {
	const arr = [];
	while (arr.length < n) {
		const r = Math.floor(Math.random() * n) + 1;
		if (arr.indexOf(r) === -1) arr.push(r);
	}
	/*console.log(arr);*/
	return arr;
}
