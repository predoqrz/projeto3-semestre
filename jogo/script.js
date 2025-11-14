const gameBoard = document.getElementById('gameBoard');
const restartButton = document.getElementById('restartButton');
let cards = [];
let flippedCards = [];
let matchedPairs = 0;

// Imagens que vamos usar nas cartas
const imagens = [
  'img/celular.png', 'img/carrinhoremoto.png', 'img/smartwatch.png',
  'img/fonegamer.png', 'img/kitmusculacao.png', 'img/tenis.png',
  'img/celular.png', 'img/carrinhoremoto.png', 'img/smartwatch.png',
  'img/fonegamer.png', 'img/kitmusculacao.png', 'img/tenis.png',
];

// Função para embaralhar as cartas
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para iniciar o jogo
function startGame() {
  cards = [];
  flippedCards = [];
  matchedPairs = 0;

  shuffleArray(imagens);
  gameBoard.innerHTML = '';

  // Criar as cartas no tabuleiro 
  imagens.forEach((imgSrc, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', index);
    card.setAttribute('data-img', imgSrc);

    // Cria a imagem e oculta até virar a carta
    const imagem = document.createElement('img');
    imagem.src = imgSrc;
    imagem.alt = 'carta';
    card.appendChild(imagem);

    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
  });
}
  
// Função para virar a carta
function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 800);
    }
  }
}

// Função para verificar se as cartas viradas combinam
function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.getAttribute('data-img') === card2.getAttribute('data-img')) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedPairs++;
    if (matchedPairs === imagens.length / 2) {
      setTimeout(() => alert('Parabéns, você venceu!'), 500);
    }
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }
  flippedCards = [];
}

// Reiniciar o jogo
restartButton.addEventListener('click', startGame);

// Iniciar o jogo ao carregar a página
startGame();
