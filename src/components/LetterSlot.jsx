import React from 'react';
import './LetterSlot.css';

function LetterSlot({ id, letter, onClick }) {
  return (
    <div 
      className={`letter-slot ${letter ? 'filled' : 'empty'}`}
      onClick={onClick}
    >
      {letter}
    </div>
  );
}

export default LetterSlot;
