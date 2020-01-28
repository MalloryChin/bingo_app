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
  values: number[];
  selectedValues: boolean[];
  onClick: (i: number) => void;
}

class Board extends React.Component<BoardProps> {
  renderSquare(i: number) {
    return <Square
      value = {this.props.values[i]}
      selected = {this.props.selectedValues[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
  }
}

export default Board;
