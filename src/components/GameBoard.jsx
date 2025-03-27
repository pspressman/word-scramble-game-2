import React, { useState, useEffect } from 'react';
import LetterTile from './LetterTile';
import LetterSlot from './LetterSlot';
import './GameBoard.css';

function GameBoard({ word, scrambledLetters, onCorrectWord }) {
  const [slots, setSlots] = useState([]);
  const [tiles, setTiles] = useState([]);
  const [selectedTile, setSelectedTile] = useState(null);
  
  // Initialize slots and tiles when word changes
  useEffect(() => {
    if (word) {
      // Create empty slots for each letter in the word
      setSlots(Array.from({ length: word.length }, (_, i) => ({
        id: `slot-${i}`,
        position: i,
        letter: null,
        tileId: null
      })));
      
      // Set up letter tiles
      setTiles(scrambledLetters);
    }
  }, [word, scrambledLetters]);
  
  // Select a tile for placement
  const handleTileClick = (tileId) => {
    const tileIndex = tiles.findIndex(t => t.id === tileId);
    if (tileIndex !== -1 && !tiles[tileIndex].isUsed) {
      setSelectedTile(tileId);
    }
  };
  
  // Place a tile in a slot
  const handleSlotClick = (slotId) => {
    if (!selectedTile) return;
    
    const slotIndex = slots.findIndex(s => s.id === slotId);
    
    // Only allow placement in empty slots
    if (slotIndex !== -1 && slots[slotIndex].tileId === null) {
      // Find the tile
      const tileIndex = tiles.findIndex(t => t.id === selectedTile);
      
      // Update slots with the placed tile
      const newSlots = [...slots];
      newSlots[slotIndex] = {
        ...newSlots[slotIndex],
        letter: tiles[tileIndex].letter,
        tileId: selectedTile
      };
      setSlots(newSlots);
      
      // Mark the tile as used
      const newTiles = [...tiles];
      newTiles[tileIndex] = {
        ...newTiles[tileIndex],
        isUsed: true
      };
      setTiles(newTiles);
      
      // Clear selection
      setSelectedTile(null);
      
      // Check if word is complete
      checkWordCompletion(newSlots);
    }
  };
  
  // Remove a tile from a slot
  const handleSlotReset = (slotId) => {
    const slotIndex = slots.findIndex(s => s.id === slotId);
    if (slotIndex !== -1 && slots[slotIndex].tileId) {
      const tileId = slots[slotIndex].tileId;
      
      // Clear the slot
      const newSlots = [...slots];
      newSlots[slotIndex] = {
        ...newSlots[slotIndex],
        letter: null,
        tileId: null
      };
      setSlots(newSlots);
      
      // Mark the tile as available again
      const tileIndex = tiles.findIndex(t => t.id === tileId);
      const newTiles = [...tiles];
      newTiles[tileIndex] = {
        ...newTiles[tileIndex],
        isUsed: false
      };
      setTiles(newTiles);
    }
  };
  
  // Check if the word is correctly formed
  const checkWordCompletion = (currentSlots) => {
    // Check if all slots are filled
    const isComplete = currentSlots.every(slot => slot.letter !== null);
    
    if (isComplete) {
      // Build the word from slot letters
      const formedWord = currentSlots.map(slot => slot.letter).join('');
      
      // Check if it matches the target word
      if (formedWord === word) {
        // Word is correct!
        onCorrectWord();
      } else {
        // Word is incorrect
        alert("That's not quite right. Try rearranging the letters!");
      }
    }
  };
  
  return (
    <div className="game-board">
      <div className="word-slots">
        {slots.map(slot => (
          <LetterSlot
            key={slot.id}
            id={slot.id}
            letter={slot.letter}
            onClick={() => slot.letter ? handleSlotReset(slot.id) : handleSlotClick(slot.id)}
          />
        ))}
      </div>
      
      <div className="letter-tiles">
        {tiles.map(tile => (
          <LetterTile
            key={tile.id}
            id={tile.id}
            letter={tile.letter}
            isUsed={tile.isUsed}
            isSelected={selectedTile === tile.id}
            onClick={() => handleTileClick(tile.id)}
          />
        ))}
      </div>
      
      <button 
        className="check-button"
        onClick={() => checkWordCompletion(slots)}
      >
        Check Word
      </button>
    </div>
  );
}

export default GameBoard;
