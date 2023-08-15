import React from 'react';
import './Square.css'
function Square({ value, onClick, cls }) {
  let clss=cls+" square";
  return (
    <button className={clss}  onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
