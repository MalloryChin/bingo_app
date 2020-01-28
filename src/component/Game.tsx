import * as React from 'react';
import Overlay from './Overlay';
import {OverlayTheme} from './Overlay';
import Board from './Board';
import InputForm from './InputForm';

interface GameProps {
  len: number;
}

interface GameState {
  values: number[];
  selectedValues: boolean[];
}

class Game extends React.Component<GameProps, GameState> {
  area: number;

  constructor(props: GameProps) {
    super(props);
    this.area = this.props.len * this.props.len;
    this.state = {
      values: randomNumbers(this.area),
      selectedValues: Array(this.area).fill(false),
    };
  }

  handleClick(i: number) {
    const selectedValues = this.state.selectedValues.slice();
    selectedValues[i] = true;
    this.setState({
      selectedValues: selectedValues,
    });
  }

  restart() {
    this.setState({
      values: randomNumbers(this.area),
      selectedValues: Array(this.area).fill(false),
    });
  }

  render() {
    return (
      <div className="game">
        <OverlayTheme.Provider value={bingo(this.props.len, this.state.selectedValues)}>
          <Overlay
            onClick = {() => this.restart()}
          />
        </OverlayTheme.Provider>
        <div className="game-main">
          <InputForm
            values = {this.state.values}
            onClick = {(i: number) => this.handleClick(i)}
          />
          <Board
            values = {this.state.values}
            selectedValues = {this.state.selectedValues}
            onClick = {(i: number) => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

export default Game;


// ===============Helper===================

function bingo(len: number, square: boolean[]) {
  let lines = 0;

  for (let i = 0; i < len; i++) {
    let hline = true;
    let vline = true;
    for (let j = 0; j < len; j++) {
      if(!square[i * len + j]) hline = false;
      if(!square[i + j * len]) vline = false;
    }
    if(hline) lines++;
    if(vline) lines++;
  }

  let ldiagonal = true;
  let rdiagonal = true;
  for (let i = 0; i < len; i++) {
    if(!square[i * len + i]) ldiagonal = false;
    if(!square[i * len + (len - i - 1)]) rdiagonal = false;
  }
  if(ldiagonal) lines++;
  if(rdiagonal) lines++;

  if(lines >= 3) return true;
  else return false;
}

function randomNumbers(n: number) {
  var arr = [];
  while(arr.length < n){
      var r = Math.floor(Math.random() * n) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
  return arr;
}
