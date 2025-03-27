import React, { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import { wordList } from './game';

function App() {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentHint, setCurrentHint] = useState('');
  const [scrambledLetters, setScrambledLetters] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);
  
  // Function to select a random word
  const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const wordObj = wordList[randomIndex];
    setCurrentWord(wordObj.word);
    setCurrentHint(wordObj.hint);
    
    // Scramble the letters
    const letters = wordObj.word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    
    setScrambledLetters(letters.map((letter, index) => ({
      id: `tile-${index}`,
      letter,
      isUsed: false
    })));
  };
  
  // Initialize game on first render
  useEffect(() => {
    selectRandomWord();
  }, []);
  
  // Handle successful word completion
  const handleCorrectWord = () => {
    setScore(prevScore => prevScore + 10);
    setShowCelebration(true);
  };
  
  // Start a new word
  const handleNextWord = () => {
    setShowCelebration(false);
    selectRandomWord();
  };
  
  return (
    <div className="App">
      <h1>Word Scramble Game</h1>
      <div className="game-container">
        <p className="score">Score: {score}</p>
        <p className="hint">Hint: {currentHint}</p>
        
        <GameBoard 
          word={currentWord}
          scrambledLetters={scrambledLetters}
          onCorrectWord={handleCorrectWord}
        />
        
        <div className="buttons">
          <button onClick={() => alert(currentHint)}>Show Hint</button>
          <button onClick={handleNextWord}>New Word</button>
        </div>
      </div>
      
      {showCelebration && (
        <div className="celebration">
          <div className="celebration-content">
            <h2>Great Job!</h2>
            <p>You solved the word!</p>
            <button onClick={handleNextWord}>Next Word</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
