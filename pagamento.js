/* ---------- AUX: utilitário para escapar texto (segurança) ---------- */
function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/[&<>"']/g, function(m) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
  });
}

/* ---------- GERAÇÃO DE BOLETO (fictício) ---------- */
function gerarBoleto() {
  // retorna 47 dígitos como string (máximo usado em boletos BR)
  return Array.from({ length: 37 }, () => Math.floor(Math.random() * 10)).join('');
}

/* ---------- MÁSCARAS ---------- */
function mascaraCartao(input) {
  if (!input) return;
  input.value = input.value.replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim();
}

function mascaraValidade(input) {
  if (!input) return;
  let v = input.value.replace(/\D/g, '').slice(0,4);
  if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2);
  input.value = v;
}

/* ---------- FUNÇÕES DE MODAL DE PAGAMENTO ---------- */
function abrirPagamento() {
  // remove modal anterior se existente
  document.getElementById("modalPagamento")?.remove();

  // cria modal
  const modal = document.createElement("div");
  modal.id = "modalPagamento";
  modal.innerHTML = `
    <div class="pagamento-overlay"></div>
    <div class="pagamento-container" role="dialog" aria-modal="true" aria-labelledby="pagamento-title">
      <h2 id="pagamento-title">💳 Confirmação de Pagamento</h2>
      <p id="pagamento-total" style="margin-top:6px; font-weight:600;"></p>

      <label for="metodo">Método de pagamento:</label>
      <select id="metodo" aria-label="Método de pagamento">
        <option value="">Selecione...</option>
        <option value="pix">Pix</option>
        <option value="cartao">Cartão</option>
        <option value="boleto">Boleto</option>
      </select>

      <div id="info-pix" class="pagamento-info hidden" style="margin-top:10px; text-align:center;">
        <p style="margin:8px 0;">Leia o QR Code ou copie a chave Pix</p>
        <img id="pix-qr" src="" alt="QR Pix" style="width:150px; height:150px; display:block; margin:0 auto 8px;"/>
        <div style="font-size:13px; color:#666;">Chave Pix: <span id="pix-chave">pagamento@clubvendas.com.br</span></div>
        <div style="margin-top:8px; display:flex; gap:8px; justify-content:center;">
          <button id="baixar-qr" type="button">Baixar QR</button>
          <button id="copiar-chave-pix" type="button">Copiar chave</button>
        </div>
      </div>

      <div id="info-cartao" class="pagamento-info hidden" style="margin-top:8px;">
        <input id="numeroCartao" placeholder="Número do Cartão" maxlength="19" />
        <div style="display:flex; gap:8px; margin-top:6px;">
          <input id="validadeCartao" placeholder="MM/AA" maxlength="5" style="flex:1;" />
          <input id="cvvCartao" placeholder="CVV" maxlength="4" style="width:100px;" />
        </div>
        <input id="nomeCartao" placeholder="Nome impresso no cartão" style="margin-top:8px;" />
      </div>

      <div id="info-boleto" class="pagamento-info hidden" style="margin-top:8px; text-align:center;">
        <p style="margin:4px 0;">Número do boleto </p>
        <div id="boleto-numero" style="font-family:monospace; background:#f3f3f3; padding:8px; border-radius:6px; display:inline-block;"></div>
        <div style="margin-top:8px;">
          <button id="btnGerarBoleto" type="button">Gerar novo boleto</button>
          <button id="copiar-boleto" type="button">Copiar número</button>
        </div>
        <div style="margin-top:6px; color:#666; font-size:13px;">Vencimento: <span id="boleto-venc">07/12/2025</span></div>
      </div>

      <div class="botoes-pagamento" style="margin-top:12px;">
        <button class="confirmar" id="btnConfirmar">Confirmar</button>
        <button class="cancelar" id="btnCancelar">Cancelar</button>
      </div>
    </div>
  `;

  // adiciona no DOM
  document.body.appendChild(modal);

  // preenche total e QR/boleto dinâmicos
  const total = (typeof carrinho !== 'undefined') ? carrinho.reduce((s, i) => s + i.preco, 0) : 0;
  document.getElementById('pagamento-total').innerText = 'Total: R$ ' + total.toFixed(2).replace('.', ',');

  // gera e atribui um "QR" fictício via data URL SVG
  const qrDataUrl = gerarQrFalsoDataUrl();
  document.getElementById('pix-qr').src = qrDataUrl;

  // gera boleto ao abrir
  document.getElementById('boleto-numero').innerText = gerarBoleto();

  // eventos
  document.getElementById('metodo').addEventListener('change', e => {
    mostrarCamposPagamento();
  });

  document.getElementById('numeroCartao').addEventListener('input', e => mascaraCartao(e.target));
  document.getElementById('validadeCartao').addEventListener('input', e => mascaraValidade(e.target));

  document.getElementById('btnGerarBoleto').onclick = () => {
    document.getElementById('boleto-numero').innerText = gerarBoleto();
  };

  document.getElementById('copiar-boleto').onclick = () => {
    const num = document.getElementById('boleto-numero').innerText.replace(/\s+/g,'');
    navigator.clipboard?.writeText(num).then(()=> alert('Número do boleto copiado!')).catch(()=> alert('Não foi possível copiar.'));
  };

  document.getElementById('copiar-chave-pix').onclick = () => {
    const chave = document.getElementById('pix-chave').innerText;
    navigator.clipboard?.writeText(chave).then(()=> alert('Chave Pix copiada!')).catch(()=> alert('Não foi possível copiar.'));
  };

  document.getElementById('baixar-qr').onclick = () => {
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = 'pix_qr.svg';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  document.getElementById('btnCancelar').onclick = fecharPagamento;
  document.getElementById('btnConfirmar').onclick = confirmarPagamento;

  // foco acessível
  const primeiro = document.getElementById('metodo');
  if (primeiro) primeiro.focus();
}

/* ---------- mostra/oculta áreas conforme método escolhido ---------- */
function mostrarCamposPagamento() {
  document.querySelectorAll(".pagamento-info").forEach(div => div.classList.add("hidden"));
  const metodo = document.getElementById("metodo")?.value || '';
  if (metodo === "pix") document.getElementById("info-pix").classList.remove("hidden");
  if (metodo === "cartao") document.getElementById("info-cartao").classList.remove("hidden");
  if (metodo === "boleto") document.getElementById("info-boleto").classList.remove("hidden");
}

/* ---------- confirmação do pagamento (valida campos) ---------- */
function confirmarPagamento() {
  const metodo = document.getElementById('metodo')?.value || '';
  if (!metodo) { alert('Selecione um método de pagamento.'); return; }

  if (metodo === 'cartao') {
    const numero = (document.getElementById('numeroCartao')?.value || '').replace(/\s/g,'');
    const validade = (document.getElementById('validadeCartao')?.value || '').trim();
    const cvv = (document.getElementById('cvvCartao')?.value || '').trim();
    const nome = (document.getElementById('nomeCartao')?.value || '').trim();

    if (!numero || numero.length < 16 || !validade || !cvv || !nome) {
      alert('Preencha todos os dados do cartão corretamente.');
      return;
    }
    // aqui você poderia adicionar Luhn e validação de validade
  }

  // mensagens específicas
  if (metodo === 'pix') {
    alert('Pagamento via PIX confirmado ✅');
  } else if (metodo === 'boleto') {
    alert('Boleto gerado ✅');
  } else {
    alert('Pagamento via CARTÃO confirmado ✅');
  }

  // finaliza compra: limpa carrinho e atualiza
  if (typeof carrinho !== 'undefined') {
    carrinho = [];
    try { salvarCarrinho(); } catch(e){ /* se salvarCarrinho não existir, ignora */ }
    try { renderizarCarrinho(); } catch(e){ /* ignora */ }
  }

  fecharPagamento();
  try { fecharCarrinho(); } catch(e){ /* ignora se não existir */ }
}

/* ---------- fecha e remove modal ---------- */
function fecharPagamento() {
  document.getElementById('modalPagamento')?.remove();
}

/* ---------- gera QR fictício como data URL (SVG) ---------- */
function gerarQrFalsoDataUrl() {
  const size = 200;
  const cell = 8;
  const cols = Math.floor(size / cell);
  const rows = cols;
  let rects = '';
  for (let r=0; r<rows; r++) {
    for (let c=0; c<cols; c++) {
      const on = ((r*13 + c*7) % 5 === 0); // padrão pseudo-aleatório
      if (on) rects += `<rect x="${c*cell}" y="${r*cell}" width="${cell}" height="${cell}" fill="#000"/>`;
    }
  }
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'><rect width='100%' height='100%' fill='#fff'/>${rects}</svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

/* ---------- EXPORTAÇÃO/REUSO ---------- */
/* Se quiser chamar o modal de outros scripts, use: abrirPagamento() */