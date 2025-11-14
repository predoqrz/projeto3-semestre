const produtos = [
  { 
    id: 1, 
    nome: "Smartphone Dual Camera", 
    categoria: "eletronicos", 
    preco: 1299.00, 
    img: "img/celular.png",
    descricao: "Smartphone com tela de 6,5 polegadas, câmera dupla de 48MP, processador Octa-Core e 128GB de armazenamento interno. Dual Chip 4G e bateria de longa duração."
  },
  { 
    id: 10, 
    nome: "Boneca Interativa", 
    categoria: "brinquedo", 
    preco: 89.90, 
    img: "img/boneca.png",
    descricao: "Boneca com funções de fala e som, cabelos penteáveis e roupas removíveis. Ideal para crianças a partir de 3 anos."
  },
  { 
    id: 11, 
    nome: "Carrinho de Controle Remoto", 
    categoria: "brinquedo", 
    preco: 129.90, 
    img: "img/carrinhoremoto.png",
    descricao: "Carrinho RC com controle remoto sem fio, bateria recarregável e design esportivo. Velocidade de até 15 km/h."
  },
  { 
    id: 12, 
    nome: "Quebra-Cabeça 1000 Peças", 
    categoria: "brinquedo", 
    preco: 49.90, 
    img: "img/quebracabeca.png",
    descricao: "Quebra-cabeça de 1000 peças com imagem de arte. Peças resistentes, encaixe perfeito e acabamento brilhante."
  },
  { 
    id: 21, 
    nome: "Tênis Esportivo Unissex", 
    categoria: "moda", 
    preco: 219.90, 
    img: "img/tenis.png",
    descricao: "Tênis esportivo com solado em EVA, palmilha macia e tecido respirável. Ideal para academia e caminhadas."
  },
  { 
    id: 30, 
    nome: "Bola de Futebol Oficial", 
    categoria: "esporte", 
    preco: 99.90, 
    img: "img/bola.png",
    descricao: "Bola de futebol tamanho oficial, material sintético resistente e costura reforçada. Ideal para treinos e jogos."
  },
  { 
    id: 31, 
    nome: "Kit Musculação 10kg", 
    categoria: "esporte", 
    preco: 259.90, 
    img: "img/kitmusculacao.png",
    descricao: "Kit de musculação com halteres ajustáveis, discos em ferro e barra de conexão para exercícios variados."
  },
  { 
    id: 40, 
    nome: "Garrafa Térmica 1L", 
    categoria: "utilidades", 
    preco: 79.90, 
    img: "img/garrafa.png",
    descricao: "Garrafa térmica de 1 litro com tampa rosqueável e parede dupla em aço inox. Mantém líquidos frios ou quentes por até 12h."
  },
  { 
    id: 51, 
    nome: "Fone Gamer RGB", 
    categoria: "eletronicos", 
    preco: 249.90, 
    img: "img/fonegamer.png",
    descricao: "Headset gamer com iluminação RGB, microfone com redução de ruído e som estéreo de alta definição."
  },
  { 
  id: 32, 
  nome: "Bola de Futebol Adidas Oficial", 
  categoria: "esporte", 
  preco: 129.90, 
  img: "img/bolaadidas.png",
  descricao: "Bola de futebol Adidas tamanho oficial, confeccionada em material sintético resistente, com excelente controle e durabilidade. Ideal para treinos e partidas recreativas."
},{
  id: 33,
  nome: "Bola de Futebol Nike Campo",
  categoria: "esporte",
  preco: 139.90,
  img: "img/bolanike.png",
  descricao: "Bola de futebol Nike tamanho oficial, com design moderno, textura em alto relevo e ótima aerodinâmica. Ideal para partidas em campo e treinos intensos."
},
{
  id: 34,
  nome: "Bola Corinthians Black",
  categoria: "esporte",
  preco: 119.90,
  img: "img/bolacorinthians.png",
  descricao: "Bola de futebol Corinthians na cor preta, com escudo oficial e acabamento de alta qualidade. Perfeita para torcedores e colecionadores do Timão."
},
{
  id: 35,
  nome: "Jogo de Tabuleiro Sequence",
  categoria: "brinquedo",
  preco: 89.90,
  img: "img/jogosequence.png",
  descricao: "Sequence é um jogo de tabuleiro estratégico e divertido, que combina cartas e fichas. Ideal para 2 a 12 jogadores, indicado para todas as idades."
},
{
  id: 36,
  nome: "Kit 3 Caixas Organizadoras Pretas",
  categoria: "utilidades",
  preco: 99.90,
  img: "img/kit3cxsorganizadoras.png",
  descricao: "Conjunto com 3 caixas organizadoras em plástico trançado na cor preta. Perfeitas para armazenar roupas, brinquedos e diversos objetos com estilo e praticidade."
},
{
  id: 37,
  nome: "Kit 4 Saleiros de Vidro",
  categoria: "utilidades",
  preco: 49.90,
  img: "img/kitsaleiro.png",
  descricao: "Conjunto com 4 saleiros de vidro com tampa de aço inox. Ideais para armazenar temperos e dar um toque elegante à sua cozinha."
},
{
  id: 38,
  nome: "Pote Hermético para Macarrão",
  categoria: "utilidades",
  preco: 29.90,
  img: "img/potehermetico.png",
  descricao: "Pote hermético transparente com tampa preta, ideal para armazenar macarrão e manter os alimentos sempre frescos e organizados na sua cozinha."
},
{
  id: 39,
  nome: "Boleira de Vidro com Tampa",
  categoria: "utilidades",
  preco: 89.90,
  img: "img/boleira.png",
  descricao: "Boleira elegante em vidro com tampa arredondada e base com pedestal. Perfeita para servir e conservar bolos e doces com charme e sofisticação."
},{
  id: 40,
  nome: "Fone de Ouvido Over-Ear Bluetooth",
  categoria: "eletronicos",
  preco: 2899.90,
  img: "img/fone.png",
  descricao: "Fone de ouvido Bluetooth over-ear com cancelamento ativo de ruído, estrutura em alumínio e almofadas acolchoadas para máximo conforto e som de alta fidelidade."
},
{
  id: 41,
  nome: "Fones de Ouvido Sem Fio",
  categoria: "eletronicos",
  preco: 1299.90,
  img: "img/fonesemfio.png",
  descricao: "Fones de ouvido sem fio com estojo de carregamento, design ergonômico e áudio de alta qualidade. Perfeitos para uso diário e chamadas com clareza cristalina."
},
{
  id: 42,
  nome: "Notebook Positivo Motion",
  categoria: "eletronicos",
  preco: 2299.90,
  img: "img/notebook.png",
  descricao: "Notebook Positivo Motion com tela de 15,6”, Windows 11, teclado numérico e design leve e moderno, ideal para estudo e trabalho."
},{
  id: 43,
  nome: "Smartwatch Fitness",
  categoria: "eletronicos",
  preco: 799.90,
  img: "img/smartwatch.png",
  descricao: "Smartwatch moderno com monitoramento de frequência cardíaca, passos, sono e notificações do celular. Resistente à água e com diversas opções de mostradores personalizáveis."
}, {
  id: 44,
  nome: "Bicicleta Aro 24",
  categoria: "esporte",
  preco: 899.90,
  img: "img/bicicletaaro24.jpg",
  descricao: "Bicicleta aro 24 com quadro leve, freios precisos e design ergonômico. Ideal para jovens e adolescentes que buscam conforto e segurança nas pedaladas."
},
{
  id: 45,
  nome: "Bicicleta Aro 26",
  categoria: "esporte",
  preco: 1199.90,
  img: "img/bicicletaaro26.png",
  descricao: "Bicicleta aro 26 com estrutura resistente, câmbio de múltiplas marchas e freios a disco. Perfeita para passeios urbanos e trilhas leves."
},
{
  id: 46,
  nome: "Bicicleta Aro 29",
  categoria: "esporte",
  preco: 1899.90,
  img: "img/bicicletaaro.png",
  descricao: "Bicicleta aro 29 de alto desempenho, equipada com suspensão dianteira e quadro em alumínio. Indicada para ciclistas que buscam velocidade e estabilidade em terrenos variados."
},
{
  id: 47,
  nome: "Jogo 5 em 1",
  categoria: "brinquedo",
  preco: 149.90,
  img: "img/jogo5em1.png",
  descricao: "Jogo 5 em 1 com diversas opções de diversão em um só conjunto, incluindo damas, xadrez, ludo, trilha e dominó. Ideal para toda a família."
},
{
  id: 48,
  nome: "Lousa Mágica Infantil",
  categoria: "brinquedo",
  preco: 79.90,
  img: "img/lousamagica.png",
  descricao: "Lousa mágica infantil com caneta magnética e apagador deslizante. Estimula a criatividade e coordenação das crianças de forma divertida."
},
{
  id: 49,
  nome: "LEGO Homem-Aranha",
  categoria: "brinquedo",
  preco: 249.90,
  img: "img/legohomemaranha.png",
  descricao: "Conjunto LEGO inspirado no Homem-Aranha, com peças para montar cenários e personagens do universo Marvel. Estimula a imaginação e o raciocínio lógico."
},
{
  id: 50,
  nome: "Tênis Feminino Casual",
  categoria: "moda",
  preco: 229.90,
  img: "img/tenisfeminino.png",
  descricao: "Tênis feminino casual com design moderno, solado antiderrapante e material respirável. Ideal para o dia a dia com conforto e estilo."
},
{
  id: 51,
  nome: "Vestido Azul Zara",
  categoria: "moda",
  preco: 349.90,
  img: "img/vestidoazul.png",
  descricao: "Vestido azul da Zara confeccionado em tecido leve e fluido, com modelagem elegante e caimento perfeito para diversas ocasiões."
},
{
  id: 52,
  nome: "Camisa Polo Masculina",
  categoria: "moda",
  preco: 159.90,
  img: "img/polomasculina.png",
  descricao: "Camisa polo masculina em algodão premium, com gola estruturada e corte clássico. Ideal para compor um visual casual e sofisticado."
},
{
  id: 53,
  nome: "Kit de Meias",
  categoria: "moda",
  preco: 49.90,
  img: "img/meias.png",
  descricao: "Kit com 3 pares de meias confortáveis, confeccionadas em algodão macio e com punho elástico. Perfeitas para o uso diário."
},
{
  id: 54,
  nome: "Conjunto Masculino Manchester",
  categoria: "moda",
  preco: 299.90,
  img: "img/conjuntomanchester.png",
  descricao: "Conjunto masculino inspirado no Manchester, composto por camisa esportiva e short. Material leve e confortável, ideal para práticas esportivas e uso casual."
},
{
  id: 55,
  nome: "Conjunto Infantil Feminino Leve (Leve 2 Pague 1)",
  categoria: "moda",
  preco: 129.90,
  img: "img/conjuntomenina.png",
  descricao: "Conjunto infantil feminino colorido, feito em tecido macio e respirável. Promoção especial: leve 2 e pague 1! Perfeito para o dia a dia das pequenas."
},
{
  id: 56,
  nome: "Conjunto Infantil Masculino",
  categoria: "moda",
  preco: 159.90,
  img: "img/conjuntomenino.png",
  descricao: "Conjunto infantil masculino composto por camiseta branca de botões e bermuda de sarja bege. Ideal para ocasiões especiais com conforto e elegância."
},{
  id: 57,
  nome: "Jarra de Vidro",
  categoria: "utilidades",
  preco: 69.90,
  img: "img/jarradevidro.png",
  descricao: "Jarra de vidro transparente com design elegante e alça ergonômica. Ideal para servir sucos, água ou refrescos com estilo à mesa."
},
{
  id: 58,
  nome: "Garrafa Frozen",
  categoria: "utilidades",
  preco: 49.90,
  img: "img/garrafafrozen.png",
  descricao: "Garrafa temática da Frozen com estampa colorida e tampa rosqueável. Perfeita para crianças levarem bebidas para a escola com praticidade e diversão."
},
{
  id: 59,
  nome: "Potes de Mantimentos",
  categoria: "utilidades",
  preco: 119.90,
  img: "img/potesdemantimentos.png",
  descricao: "Conjunto de potes de mantimentos com tampas vedantes, ideais para armazenar grãos, massas e cereais. Mantêm os alimentos organizados e frescos por mais tempo."
},
{
  id: 60,
  nome: "Kit de Colheres de Silicone",
  categoria: "utilidades",
  preco: 79.90,
  img: "img/kitcolheresdesilicone.png",
  descricao: "Kit de colheres de silicone resistentes ao calor, ideais para cozinhar sem riscar panelas. Design moderno e cabo ergonômico para maior conforto no uso diário."
},
{
  id: 61,
  nome: "Kit Marmita",
  categoria: "utilidades",
  preco: 99.90,
  img: "img/kitmarmita.png",
  descricao: "Kit marmita completo com potes herméticos com talheres. Ideal para levar refeições de forma prática e segura para o trabalho, escola ou academia."
},
{
  id: 62,
  nome: "Caixa Gaveteiros",
  categoria: "utilidades",
  preco: 89.90,
  img: "img/kitgaveteiro.png",
  descricao: "Conjunto com 3 caixas organizadoras empilháveis, perfeitas para guardar roupas, brinquedos ou utensílios. Design moderno e material resistente."
},
{
  id: 63,
  nome: "Caixas Gaveteiros (2 Unidades)",
  categoria: "utilidades",
  preco: 149.90,
  img: "img/2caixagaveteiro.png",
  descricao: "Conjunto com 2 caixas gaveteiros plásticas, ideais para organizar pequenos objetos, cosméticos ou materiais de escritório. Compactas e fáceis de empilhar."
},
{
  id: 64,
  nome: "Echo Dot",
  categoria: "eletronicos",
  preco: 499.90,
  img: "img/echodot.png",
  descricao: "Echo Dot com Alexa, alto-falante inteligente compacto, ideal para ouvir música, controlar dispositivos domésticos inteligentes e receber informações de forma prática por comando de voz."
},
{
  id: 65,
  nome: "Carregador Portátil",
  categoria: "eletronicos",
  preco: 149.90,
  img: "img/carregadorportatil.png",
  descricao: "Carregador portátil com alta capacidade de bateria, compatível com smartphones e tablets. Compacto e leve, ideal para levar em viagens ou no dia a dia."
}, 
{
  id: 66,
  nome: "Brinquedo Homem-Aranha",
  categoria: "brinquedo",
  preco: 199.90,
  img: "img/brinquedohomemaranha.png",
  descricao: "Brinquedo do Homem-Aranha com detalhes realistas, ideal para colecionadores e para diversão das crianças. Estimula a imaginação e brincadeiras criativas."
},
{
  id: 67,
  nome: "Brinquedo Infantil Pop It Musical",
  categoria: "brinquedo",
  preco: 89.90,
  img: "img/popitmusical.png",
  descricao: "Brinquedo Pop It musical, com sons divertidos e cores vibrantes. Estimula a coordenação motora e o raciocínio lógico das crianças de forma lúdica."
},
{
  id: 68,
  nome: "Carrinho de Controle Remoto",
  categoria: "brinquedo",
  preco: 249.90,
  img: "img/carrinhoremoto.png",
  descricao: "Carrinho de controle remoto com design robusto e alta velocidade. Ideal para brincadeiras ao ar livre, proporcionando diversão para crianças e adolescentes."
},
{
  id: 69,
  nome: "Dinossauro de Controle Remoto",
  categoria: "brinquedo",
  preco: 299.90,
  img: "img/dinossauroremoto.png",
  descricao: "Dinossauro interativo de controle remoto, com movimentos realistas e sons. Estimula a imaginação e proporciona diversão emocionante para crianças."
}, 
{
  id: 70,
  nome: "Jogo de Bingo",
  categoria: "brinquedo",
  preco: 59.90,
  img: "img/bingo.png",
  descricao: "Jogo de Bingo completo com cartelas, bolinhas numeradas e saco para sorteio. Ideal para diversão em família ou com amigos, estimulando atenção e interação."
}, 
{
  id: 71,
  nome: "Teclado Mecânico e Mouse Sem Fio",
  categoria: "eletronicos",
  preco: 499.90,
  img: "img/tecladomecanico_mouse.png",
  descricao: "Conjunto de teclado mecânico e mouse sem fio, com design ergonômico e alta durabilidade. Ideal para trabalho e jogos com conforto e precisão."
},
{
  id: 72,
  nome: "Tablet",
  categoria: "eletronicos",
  preco: 1299.90,
  img: "img/tablet.png",
  descricao: "Tablet moderno com tela de alta resolução, sistema operacional atualizado e conectividade Wi-Fi. Perfeito para estudos, trabalho e entretenimento."
},
{
  id: 73,
  nome: "Highlighter",
  categoria: "eletronicos",
  preco: 14.90,
  img: "img/highlighter.png",
  descricao: "Caneta marca-texto colorida, ideal para destacar textos em livros, cadernos e documentos. Tinta resistente e secagem rápida."
},
{
  id: 74,
  nome: "Caixa de Som Bluetooth",
  categoria: "eletronicos",
  preco: 299.90,
  img: "img/caixadesom.png",
  descricao: "Caixa de som portátil com conexão Bluetooth, som potente e bateria de longa duração. Perfeita para ouvir música em casa ou em ambientes externos."
},
{
  id: 75,
  nome: "Patins",
  categoria: "esporte",
  preco: 399.90,
  img: "img/patinsroller.png",
  descricao: "Patins com rodas resistentes, ajuste de tamanho e proteção acolchoada. Ideal para diversão ao ar livre e prática de exercícios."
},
{
  id: 76,
  nome: "Luva de Muay Thai",
  categoria: "esporte",
  preco: 149.90,
  img: "img/luvamuaythay.png",
  descricao: "Luva de Muay Thai profissional, feita com material resistente e acolchoamento interno para máxima proteção durante treinos e competições."
},
{
  id: 77,
  nome: "Cadeado de Bike",
  categoria: "esporte",
  preco: 79.90,
  img: "img/cadeadobike.png",
  descricao: "Cadeado de bike resistente com segredo numérico. Ideal para proteger sua bicicleta em casa ou na rua com segurança e praticidade."
},
{
  id: 78,
  nome: "Bola de Basquete",
  categoria: "esporte",
  preco: 149.90,
  img: "img/boladebasquete.png",
  descricao: "Bola de basquete oficial, com ótima aderência e durabilidade. Ideal para treinos, jogos e atividades recreativas em quadras externas e internas."
},
{
  id: 79,
  nome: "Tênis Esportivo Feminino",
  categoria: "moda",
  preco: 259.90,
  img: "img/tenisesportivofem.png",
  descricao: "Tênis esportivo feminino com design moderno, solado antiderrapante e material respirável. Ideal para corridas, caminhadas e atividades físicas com conforto e estilo."
},
{
  id: 80,
  nome: "Óculos Escuro Feminino",
  categoria: "moda",
  preco: 129.90,
  img: "img/oculosescurofem.png",
  descricao: "Óculos de sol feminino com lente UV400, proteção contra raios solares e armação elegante. Perfeito para complementar o visual com estilo e segurança."
},
{
  id: 81,
  nome: "Jaqueta Puffer Masculina",
  categoria: "moda",
  preco: 399.90,
  img: "img/jaquetapuffermasc..png",
  descricao: "Jaqueta puffer masculina estilo 'Bobojaco', quentinha e confortável. Ideal para dias frios, com design moderno e bolsos funcionais."
},
{
  id: 82,
  nome: "Conjunto Fitness de Shorts",
  categoria: "moda",
  preco: 179.90,
  img: "img/conjuntofitness.png",
  descricao: "Conjunto fitness feminino composto por top e shorts, confeccionado em tecido leve e elástico. Ideal para treinos, academia ou atividades ao ar livre com conforto e estilo."
}

];


/* ---------- CARRINHO (persistência) ---------- */
let carrinho = JSON.parse(localStorage.getItem('clubvendas_carrinho') || '[]');

function salvarCarrinho() {
  localStorage.setItem('clubvendas_carrinho', JSON.stringify(carrinho));
  atualizarContador();
}

function atualizarContador() {
  const count = document.getElementById('cart-count');
  if (count) count.innerText = `(${carrinho.length})`;
}

/* ---------- RENDER (genérico) ---------- */
function criarCard(prod) {
  return `
    <div class="product-card" onclick="abrirDetalhes(${prod.id})">
      <img src="${prod.img}" alt="${escapeHtml(prod.nome)}" />
      <h4>${escapeHtml(prod.nome)}</h4>
      <p>R$ ${prod.preco.toFixed(2).replace('.',',')}</p>
      <button class="add-cart" onclick="event.stopPropagation(); adicionarCarrinho(${prod.id})">Adicionar ao carrinho</button>
    </div>
  `;
}

function abrirDetalhes(id) {
  window.location.href = `produto.html?id=${id}`;
}

function exibirProdutos(lista = produtos) {
  const area = document.getElementById('product-list');
  if (!area) return;
  area.innerHTML = lista.map(criarCard).join('');
}

function exibirProdutosPorCategoria(categoria, elementoId = 'product-list', limite = 0) {
  const lista = produtos.filter(p => p.categoria === categoria);
  const area = document.getElementById(elementoId);
  if (!area) return;
  const items = (limite > 0) ? lista.slice(0, limite) : lista;
  area.innerHTML = items.map(criarCard).join('');
}

/* ---------- BUSCA (filtra no contexto atual) ---------- */
function buscarProduto() {
  const input = document.getElementById('search');
  if (!input) return;

  const termoOriginal = input.value.trim().toLowerCase();

  // Remove acentos para facilitar a busca
  const termo = termoOriginal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Detecta se está em uma página de categoria
  const path = window.location.pathname.split('/').pop().toLowerCase();
  let cat = null;
  if (path.includes('eletronicos')) cat = 'eletronicos';
  else if (path.includes('brinquedos')) cat = 'brinquedo';
  else if (path.includes('moda')) cat = 'moda';
  else if (path.includes('esporte')) cat = 'esporte';
  else if (path.includes('utilidades')) cat = 'utilidades';

  // Filtro principal
  let resultado = produtos.filter(p => {
    const nome = p.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const desc = (p.descricao || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return nome.includes(termo) || desc.includes(termo);
  });

  // Se estiver em uma categoria, limita a ela
  if (cat) resultado = resultado.filter(p => p.categoria === cat);

  // Localiza a área correta para renderizar
  const area =
    document.getElementById('product-list') ||
    document.getElementById('eletronicos-list') ||
    document.getElementById('brinquedos-list') ||
    document.getElementById('produtos-container');

  if (!area) return;

  // Atualiza os resultados
  if (resultado.length > 0) {
    area.innerHTML = resultado.map(criarCard).join('');
  } else {
    area.innerHTML = `
      <div style="text-align:center; padding:20px; color:#555;">
        <p>😕 Nenhum produto encontrado para "<strong>${input.value}</strong>".</p>
        <button onclick="limparBusca()" 
          style="background:#007185;color:#fff;border:none;padding:10px 16px;border-radius:6px;cursor:pointer;">
          Limpar busca
        </button>
      </div>
    `;
  }

  // Rolagem suave até o início da área de resultados
  area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function limparBusca() {
  const input = document.getElementById('search');
  if (input) input.value = '';
  // Aqui você pode chamar novamente uma função que recarrega os produtos padrão
  carregarProdutos(); // Exemplo: recarrega todos os produtos
};


/* ---------- CARRINHO (ações) ---------- */
function adicionarCarrinho(prodId) {
  const produto = produtos.find(p => p.id === prodId);
  if (!produto) return;
  // verificar se já existe, incrementar quantidade se quiser (aqui simplificamos)
  carrinho.push({ id: produto.id, nome: produto.nome, preco: produto.preco, img: produto.img });
  salvarCarrinho();
  alert(`${produto.nome} adicionado ao carrinho!`);
}

function abrirCarrinho() {
  atualizarContador();
  const modal = document.getElementById('cartModal');
  if (!modal) {
    // se não tiver modal na página (algumas páginas talvez não o incluam), redireciona para index
    window.location.href = 'index.html';
    return;
  }
  renderizarCarrinho();
  modal.setAttribute('aria-hidden','false');
}

function fecharCarrinho() {
  const modal = document.getElementById('cartModal');
  if (modal) modal.setAttribute('aria-hidden','true');
}

function renderizarCarrinho() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!container || !totalEl) return;
  if (carrinho.length === 0) {
    container.innerHTML = '<p>Seu carrinho está vazio.</p>';
    totalEl.innerText = '';
    return;
  }

  let html = '';
  let total = 0;
  carrinho.forEach((item, idx) => {
    total += item.preco;
    html += `
      <div class="cart-item">
        <img src="${item.img}" alt="${escapeHtml(item.nome)}" />
        <div style="flex:1">
          <strong>${escapeHtml(item.nome)}</strong>
          <div>R$ ${item.preco.toFixed(2).replace('.',',')}</div>
        </div>
        <div>
          <button onclick="removerItem(${idx})">Remover</button>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
  totalEl.innerText = 'Total: R$ ' + total.toFixed(2).replace('.',',');
}

function removerItem(index) {
  if (index >=0 && index < carrinho.length) {
    carrinho.splice(index,1);
    salvarCarrinho();
    renderizarCarrinho();
  }
}

function finalizarCompra() {
  if (carrinho.length === 0) { 
    alert('Seu carrinho está vazio.'); 
    return; 
  }
  abrirPagamento(); // agora ele chama o modal de pagamento
}

/* ---------- CARROSSEL ---------- */
let slideIndex = 0;

function mudarSlide(n) {
  const carrossel = document.getElementById('carrosselAmazon');
  const totalSlides = carrossel.children.length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  atualizarCarrossel();
}

function atualizarCarrossel() {
  const carrossel = document.getElementById('carrosselAmazon');
  carrossel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Rotação automática a cada 4 segundos
setInterval(() => mudarSlide(1), 4000);


/* ---------- UTIL ---------- */
function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/[&<>"']/g, function(m) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; });
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener('DOMContentLoaded', () => {
  atualizarContador();

  // Se tiver elemento product-list sem conteúdo, assumimos mostrar todos
  if (
    document.getElementById('product-list') &&
    document.getElementById('product-list').innerHTML.trim() === ''
  ) {
    exibirProdutos();
  }

  /* ---------- OFERTAS DO DIA (limitadas e aleatórias) ---------- */
  function exibirOfertasDoDia(limite = 6) {
    const area = document.getElementById('ofertas-dia');
    if (!area) return;

    // Embaralha produtos e seleciona os primeiros
    const ofertas = produtos.sort(() => 0.5 - Math.random()).slice(0, limite);

    // Renderiza os cards
    area.innerHTML = ofertas.map(criarCard).join('');

    // Estilo de rolagem horizontal suave
    area.style.display = 'flex';
    area.style.overflowX = 'auto';
    area.style.scrollBehavior = 'smooth';
    area.style.gap = '16px';
    area.style.padding = '10px 0';
    area.style.scrollSnapType = 'x mandatory';

    const cards = area.querySelectorAll('.product-card');
    cards.forEach((card) => {
      card.style.scrollSnapAlign = 'start';
      card.style.flex = '0 0 auto';
      card.style.minWidth = '220px';
    });
  }

  // ✅ CHAMADA FINAL – mostra as ofertas
  exibirOfertasDoDia(6);

  // 🔙 Adiciona botão Voltar apenas em páginas internas
  const paginaAtual = window.location.pathname.split('/').pop().toLowerCase();
  if (paginaAtual !== 'index.html' && paginaAtual !== '') {
    const btnVoltar = document.createElement('button');
    btnVoltar.className = 'btn-voltar';
    btnVoltar.innerHTML = '<i class="fa fa-arrow-left"></i> Voltar';
    btnVoltar.onclick = () => history.back();
    document.body.appendChild(btnVoltar);
  }
});
