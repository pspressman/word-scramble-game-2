// Word list suitable for 7-9 year old boys
export const wordList = [
  {word: "PHARAOH", hint: "King of Ancient Egypt"},
  {word: "PYRAMID", hint: "Pointy tomb for pharaohs"},
  {word: "MUMMY", hint: "Wrapped-up ancient body"},
  {word: "SPHINX", hint: "Creature with a lion's body and human head"},
  {word: "HIEROGLYPH", hint: "Picture writing of Ancient Egypt"},
  {word: "NILE", hint: "River that gave Egypt life"},
  {word: "TOMB", hint: "A place where someone is buried"},
  {word: "SARCOPHAGUS", hint: "Stone coffin with carvings"},
  {word: "ANKH", hint: "Egyptian symbol for life"},
  {word: "SCARAB", hint: "Sacred beetle symbol"},
  {word: "PAPYRUS", hint: "Ancient Egyptian paper"},
  {word: "OBELISK", hint: "Tall stone monument with a pointy top"}, // ADDED COMMA
  {word: "OLYMPIAN", hint: "God or athlete from Mount Olympus"},
  {word: "ATHENS", hint: "Famous Greek city-state"},
  {word: "SPARTA", hint: "Warrior city of Ancient Greece"},
  {word: "ZEUS", hint: "King of the Greek gods"},
  {word: "HERCULES", hint: "Strong hero from myths"},
  {word: "TOGA", hint: "Clothing worn in ancient times"},
  {word: "TEMPLE", hint: "Building to honor gods"},
  {word: "MYTH", hint: "Old story with gods and monsters"},
  {word: "PHILOSOPHY", hint: "Study of big ideas and questions"},
  {word: "ORACLE", hint: "Person who gave wise or magical answers"},
  {word: "TROJAN", hint: "Related to the famous wooden horse trick"},
  {word: "PARTHENON", hint: "Famous temple in Athens"}, // ADDED COMMA
  {word: "ZIGGURAT", hint: "Step-shaped temple tower"},
  {word: "CUNEIFORM", hint: "Wedge-shaped writing system"},
  {word: "SARGON", hint: "Famous king of Akkad"},
  {word: "UR", hint: "An ancient city in Sumer"},
  {word: "TIGRIS", hint: "One of Mesopotamia's great rivers"},
  {word: "EUPHRATES", hint: "The other great river"},
  {word: "BABYLON", hint: "City with hanging gardens"},
  {word: "HAMMURABI", hint: "King known for writing laws"},
  {word: "CODE", hint: "Set of laws or rules"},
  {word: "CLAY", hint: "What tablets were made from"},
  {word: "SCRIBE", hint: "Person who writes"},
  {word: "SILT", hint: "Rich soil from rivers"}, // ADDED COMMA
  {word: "GILGAMESH", hint: "Epic hero and king of Uruk"},
  {word: "ENKIDU", hint: "Wild man and best friend of Gilgamesh"},
  {word: "URUK", hint: "Gilgamesh's ancient city"},
  {word: "HUMBABA", hint: "Forest monster they defeat"},
  {word: "CEDAR", hint: "Type of forest Gilgamesh journeys to"},
  {word: "ISHTAR", hint: "Goddess who gets angry at Gilgamesh"},
  {word: "FLOOD", hint: "Big ancient storm, like in the story"},
  {word: "UTNAPISHTIM", hint: "Man who survived the great flood"},
  {word: "QUEST", hint: "Dangerous journey for a goal"},
  {word: "IMMORTAL", hint: "Lives forever, like gods try to"}, // ADDED COMMA
  {word: "PERSEUS", hint: "Hero who slayed Medusa"},
  {word: "MEDUSA", hint: "Snake-haired monster who turns people to stone"},
  {word: "ATHENA", hint: "Goddess of wisdom and battle"},
  {word: "POSEIDON", hint: "God of the sea"},
  {word: "HADES", hint: "God of the underworld"},
  {word: "APOLLO", hint: "God of the sun and music"},
  {word: "ARTEMIS", hint: "Goddess of the hunt"},
  {word: "HERCULES", hint: "Strong hero who completed 12 labors"},
  {word: "ODYSSEUS", hint: "Clever hero from the Odyssey"},
  {word: "PEGASUS", hint: "Flying horse from myth"},
  {word: "MINOTAUR", hint: "Bull-headed beast in a maze"},
  {word: "THESEUS", hint: "Hero who beat the Minotaur"}, // ADDED COMMA
  {word: "ORION", hint: "Hunter constellation with a belt"},
  {word: "HERCULES", hint: "Star group named after a strong hero"},
  {word: "PEGASUS", hint: "Winged horse in the night sky"},
  {word: "ANDROMEDA", hint: "Princess in a starry chain"},
  {word: "DRACO", hint: "Dragon-shaped constellation"},
  {word: "LEO", hint: "Lion constellation"},
  {word: "TAURUS", hint: "Bull-shaped star group"},
  {word: "CASSIOPEIA", hint: "Queen in the stars, shaped like a W"},
  {word: "CYGNUS", hint: "Swan flying across the Milky Way"},
  {word: "AQUARIUS", hint: "Water-bearer in the zodiac"}
];

// Helper function to check if a word is correctly formed
export const checkWord = (wordToCheck, targetWord) => {
  return wordToCheck.toLowerCase() === targetWord.toLowerCase();
};

// Helper function to create confetti effect
export const createConfetti = () => {
  const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
  const confettiElements = [];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = -10 + 'px';
    document.body.appendChild(confetti);
    
    const size = Math.random() * 10 + 5;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    
    const animation = confetti.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${Math.random() * 100 - 50}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ],
      {
        duration: Math.random() * 1000 + 1500,
        easing: 'cubic-bezier(0,0.5,0.5,1)'
      }
    );
    
    animation.onfinish = () => {
      confetti.remove();
    };
    
    confettiElements.push(confetti);
  }
  
  return confettiElements;
};