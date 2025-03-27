# Word Scramble Game

A fun, interactive word scramble game designed for 7-9 year old boys, built with React. Players drag letter tiles to form words based on hints.

## Features

- Age-appropriate vocabulary for 7-9 year olds
- Interactive letter tiles
- Hint system to help with challenging words
- Score tracking
- Celebration animations for correct answers
- Simple, kid-friendly interface

## Project Structure

This project follows the standard React application structure:

```
word-scramble-game/
├── node_modules/        # Dependencies
├── public/              # Static files
│   ├── index.html       # HTML entry point
│   ├── manifest.json    # Web app manifest
│   └── images/          # Image assets
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── GameBoard.jsx
│   │   ├── GameBoard.css
│   │   ├── LetterTile.jsx
│   │   ├── LetterTile.css
│   │   ├── LetterSlot.jsx
│   │   └── LetterSlot.css
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styling
│   ├── index.js         # React entry point
│   ├── index.css        # Global styles
│   ├── game.js          # Game logic and data
│   └── reportWebVitals.js
├── package.json         # Project dependencies
├── package-lock.json    # Dependency lock file
├── .gitignore           # Git ignore file
├── vercel.json          # Vercel configuration
└── README.md            # This file
```

## Local Development

1. Clone the repository:
```
git clone https://github.com/pspressman/word-scramble-game.git
cd word-scramble-game
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is set up for easy deployment on Vercel.

1. Push your code to GitHub:
```
git add .
git commit -m "Ready for deployment"
git push
```

2. Deploy to Vercel through their dashboard:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a React app
   - Click "Deploy"

3. Or deploy using Vercel CLI:
```
npm install -g vercel
vercel
```

## Customization

- To modify the word list or add new words, edit the `wordList` array in `src/game.js`
- To change the styling, modify the CSS files in the appropriate components
- To modify game logic, edit the related component files

## Credits

- Created with [Create React App](https://github.com/facebook/create-react-app)
- Designed for educational purposes
