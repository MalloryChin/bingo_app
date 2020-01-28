import * as React from 'react';

interface SquareProps {
  value: number;
  selected: boolean;
  onClick: () => void;
}

class Square extends React.Component<SquareProps> {
  render() {
    let className = "square";
    if(this.props.selected) {
      className += " selected_square";
    }
    return (
      <button className={className} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

interface BoardProps {
  size: number;
  values: number[];
  selectedValues: boolean[];
  onClick: (i: number) => void;
}

class Board extends React.Component<BoardProps> {
  renderSquare(i: number) {
    return (
      <Square key = {i}
        value = {this.props.values[i]}
        selected = {this.props.selectedValues[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  createBoard() {
    let board = [];

    // Outer loop to create parent
    for (let i = 0; i < this.props.size; i++) {
      let row = []
      //Inner loop to create children
      for (let j = 0; j < this.props.size; j++) {
        row.push(this.renderSquare(i * this.props.size + j));
      }
      //Create the parent and add the children
      board.push(<div key={i} className="board-row">{row}</div>)
    }
    return board
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    );
  }
}

export default Board;
