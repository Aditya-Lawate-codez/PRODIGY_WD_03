import React from 'react';
import Square from './Square';
import './Square.css'
class Board extends React.Component {
  renderSquare(i) {
    const list = {
      0: 'top-left',
      1: 'upar',
      2: 'top-right',
      3: 'leftside',
      5: 'rightside',
      6: 'bottom-left',
      7: 'niche',
      8: 'bottom-right'
    }

    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        cls={list[i]}
      />
    );
  }

  render() {
    return (
      <div className='board'>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
