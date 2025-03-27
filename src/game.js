// Word list suitable for 7-9 year old boys
export const wordList = [
  {word: "ROCKET", hint: "It flies to space"},
  {word: "DRAGON", hint: "A mythical fire-breathing creature"},
  {word: "DINOSAUR", hint: "An extinct animal from long ago"},
  {word: "ROBOT", hint: "A machine that can move by itself"},
  {word: "SOCCER", hint: "A popular sport with a ball"},
  {word: "PIRATE", hint: "Sails the seas looking for treasure"},
  {word: "NINJA", hint: "A skilled fighter from Japan"},
  {word: "PIZZA", hint: "A round food with cheese and toppings"},
  {word: "BICYCLE", hint: "Has two wheels and pedals"},
  {word: "MONSTER", hint: "A scary creature"},
  {word: "WIZARD", hint: "Uses magic spells"},
  {word: "CASTLE", hint: "A large building with towers"},
  {word: "KNIGHT", hint: "Wears armor and fights with a sword"},
  {word: "TREASURE", hint: "Gold and jewels"},
  {word: "JUNGLE", hint: "A dense forest with many animals"},
  {word: "TIGER", hint: "A big cat with stripes"},
  {word: "SHARK", hint: "A large fish with sharp teeth"},
  {word: "SUPER", hint: "Better than regular"},
  {word: "BEACH", hint: "Sandy shore by the ocean"},
  {word: "GHOST", hint: "A spooky spirit"},
  {word: "RACING", hint: "Going fast to win"},
  {word: "VIDEO", hint: "Moving pictures on a screen"},
  {word: "HERO", hint: "Someone brave who helps others"},
  {word: "COMIC", hint: "A book with pictures and stories"},
  {word: "SPACE", hint: "The area beyond Earth where stars are"},
  {word: "ALIEN", hint: "A being from another planet"},
  {word: "PLANET", hint: "Like Earth, Mars, or Jupiter"},
  {word: "FOREST", hint: "An area with many trees"},
  {word: "POLICE", hint: "They help keep people safe"},
  {word: "LEGO", hint: "Plastic blocks you build with"}
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
