import React from 'react';
import './LetterTile.css';

function LetterTile({ id, letter, isUsed, isSelected, onClick }) {
  return (
    <div
      className={`letter-tile ${isUsed ? 'used' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={!isUsed ? onClick : undefined}
    >
      {!isUsed && letter}
    </div>
  );
}

export default LetterTile;
