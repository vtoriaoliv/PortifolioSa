:root {
  --branco: #fafafa;
  --cinza-claro: #e8e8e8;
  --cinza: #5c5c5c;
  --preto: #111111;
  --rosa: #e7a8ba;
  --rosa-fundo: #f0c2d0;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Outfit", system-ui, sans-serif;
  font-weight: 500;
  color: var(--preto);
  background: var(--branco);
}



/* =========================
   ESTILOS ORIGINAIS DA CAPA
========================= */

.capa {
  background:
    radial-gradient(
      ellipse at 82% 18%,
      rgba(231, 168, 186, 0.85),
      transparent 52%
    ),
    radial-gradient(
      ellipse at 8% 90%,
      rgba(240, 194, 208, 0.7),
      transparent 46%
    ),
    linear-gradient(
      155deg,
      #f7ecef 0%,
      #f0c2d0 48%,
      #e7a8ba 100%
    );
}

.capa-label {
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--cinza);
}

.capa-nome {
  font-weight: 800;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  letter-spacing: -0.03em;
  color: var(--preto);
}

.capa-foto {
  width: min(320px, 78vw);
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 4px;
  background: linear-gradient(
    180deg,
    #f8e8ee 0%,
    var(--rosa) 100%
  );
  border: 1px solid #ececec;
}

.capa-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(12%);
}

.capa-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cinza);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* =========================
   PÁGINA
========================= */

.page-sobre {
  background:
    radial-gradient(
      ellipse at 88% 8%,
      rgba(231, 168, 186, 0.55),
      transparent 40%
    ),
    radial-gradient(
      ellipse at 0% 55%,
      rgba(240, 194, 208, 0.5),
      transparent 45%
    ),
    linear-gradient(
      180deg,
      #f6e6eb 0%,
      #f0c2d0 42%,
      #e9b1c2 100%
    );
}


/* =========================
   NAVEGAÇÃO
========================= */

.nav-portfolio {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.72);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.nav-portfolio .nav-link {
  color: var(--cinza);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.4rem 0.7rem;
  transition: color 0.2s ease;
}

.nav-portfolio .nav-link:hover,
.nav-portfolio .nav-link.active {
  color: var(--preto);
}


/* =========================
   SEÇÕES
========================= */

.secao {
  padding: 6.5rem 0;
  scroll-margin-top: 5.2rem;
}

.secao-kicker {
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: var(--cinza);
  margin-bottom: 0.85rem;
}

.secao-titulo {
  font-weight: 800;
  font-size: clamp(2rem, 4vw, 3.1rem);
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.texto-suave {
  color: var(--cinza);
  line-height: 1.8;
  font-size: 1.02rem;
}

.linha-rosa {
  width: 48px;
  height: 3px;
  background: var(--rosa);
  margin: 1.4rem 0 2rem;
}



/* =========================
   LINHA DO TEMPO HORIZONTAL
========================= */

.robotica-intro {
  max-width: 760px;
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 65px 5px 30px;
  overflow: visible;
}

/* Linha horizontal */
.timeline::before {
  content: "";
  position: absolute;
  left: 5px;
  right: 5px;
  top: 65px;
  height: 1px;
  background: rgba(17, 17, 17, 0.16);
}

/* Cada momento */
.timeline-item {
  position: relative;
  flex: 1 1 0;
  width: auto;
  min-width: 0;
  max-width: 190px;
  min-height: 345px;
  margin: 0 8px;
  padding-top: 0;
}

/* Ponto */
.timeline-ponto {
  position: absolute;
  top: -6px;
  left: 50%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--rosa);
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 0 1px rgba(17, 17, 17, 0.08);
  transform: translateX(-50%);
  z-index: 3;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

/* Data */
.timeline-data {
  position: absolute;
  top: -47px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--cinza);
  transition: color 0.25s ease, transform 0.25s ease;
}

/* Conteúdo */
.timeline-conteudo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 30px;
}

/* Texto */
.timeline-texto {
  width: 100%;
  text-align: center;
  padding: 0;
}

.timeline-texto h3 {
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0.5rem 0 0.6rem;
  letter-spacing: -0.02em;
}

.timeline-texto p {
  color: var(--cinza);
  line-height: 1.55;
  font-size: 0.76rem;
  margin: 0 auto;
  max-width: 185px;
}

/* Número */
.timeline-numero {
  display: inline-block;
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  color: var(--cinza);
}

/* Foto */
.timeline-foto {
  width: 170px;
  height: 115px;
  overflow: hidden;
  border-radius: 7px;
  background: linear-gradient(
    180deg,
    #f8e8ee 0%,
    var(--rosa) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 10px 25px rgba(26, 26, 26, 0.06);
  opacity: 0;
  transform: translateY(10px) scale(0.97);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

/* Imagem */
.timeline-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(12%);
  transition: transform 0.4s ease, filter 0.4s ease;
}

/* =========================
   HOVER
========================= */

.timeline-item:hover .timeline-foto {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.timeline-item:hover .timeline-foto img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.timeline-item:hover .timeline-data {
  color: var(--preto);
  transform: translateX(-50%) translateY(-3px);
}

.timeline-item:hover .timeline-ponto {
  transform: translateX(-50%) scale(1.3);
  box-shadow: 0 0 0 5px rgba(231, 168, 186, 0.18);
}

/* =========================
   PROJETOS
========================= */

.card-projeto {
  height: 100%;

  border: 1px solid #ececec;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.78);

  padding: 1.6rem;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.card-projeto:hover {
  transform: translateY(-4px);

  box-shadow:
    0 18px 40px rgba(26, 26, 26, 0.06);

  border-color: #e6c5ce;
}

.card-projeto h3 {
  font-weight: 700;

  font-size: 1.2rem;
}


/* =========================
   TAGS
========================= */

.tag {
  display: inline-block;

  font-size: 0.68rem;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  color: var(--cinza);

  border: 1px solid #e4e4e4;

  border-radius: 999px;

  padding: 0.22rem 0.65rem;

  margin: 0.15rem 0.2rem 0.15rem 0;
}


/* =========================
   LINGUAGENS
========================= */

.lang-item {
  margin-bottom: 1.35rem;
}

.lang-item .d-flex {
  font-size: 0.92rem;
}

.barra {
  height: 3px;

  background: #ececec;

  border-radius: 99px;

  overflow: hidden;

  margin-top: 0.45rem;
}

.barra span {
  display: block;

  height: 100%;

  background:
    linear-gradient(
      90deg,
      #d98aa3,
      var(--rosa)
    );
}


/* =========================
   CONTATO
========================= */

.contato-box {
  border: 1px solid #ececec;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.8);

  padding: 2rem;
}

.form-control,
.form-control:focus {
  border: none;

  border-bottom: 1px solid #d8d8d8;

  border-radius: 0;

  background: transparent;

  box-shadow: none;

  padding-left: 0;
}

.form-control:focus {
  border-bottom-color: #e6c5ce;
}


/* =========================
   BOTÃO
========================= */

.btn-veja-mais {
  min-width: 160px;

  padding: 0.7rem 1.8rem;

  border: 1px solid #cfcfcf;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.55);

  color: var(--preto);

  font-size: 0.9rem;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  font-weight: 700;
}

.btn-veja-mais:hover {
  background: var(--rosa);

  border-color: #e6c5ce;

  color: var(--preto);
}


/* =========================
   RODAPÉ
========================= */

.rodape {
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  color: var(--cinza);

  font-size: 0.8rem;

  letter-spacing: 0.08em;
}




/* =========================
   RESPONSIVO ORIGINAL DA CAPA
========================= */

@media (max-width: 767.98px) {
  .capa {
    padding-top: 3rem;
  }

  .capa-foto {
    aspect-ratio: 1 / 1;
    width: min(240px, 70vw);
  }
}

/* =========================
   RESPONSIVO
========================= */

@media (max-width: 767.98px) {
  .secao {
    padding: 4.2rem 0;
  }

  .robotica-intro {
    margin-bottom: 2.5rem;
  }

  .timeline {
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: visible;
    padding: 65px 5px 30px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  .timeline-item {
    flex: 0 0 190px;
    max-width: 190px;
    min-height: 350px;
  }

  .timeline-foto {
    width: 170px;
    height: 115px;
    opacity: 1;
    transform: none;
  }

  .timeline-item:hover .timeline-foto {
    transform: none;
  }

  .timeline-texto h3 {
    font-size: 0.98rem;
  }

  .timeline-texto p {
    font-size: 0.76rem;
  }

  .nav-portfolio .nav-link {
    font-size: 0.68rem;
    padding: 0.3rem 0.45rem;
  }
}


/* =========================================================
   MODERNIZAÇÃO — PALETA NEO DIGITAL
   Creme + Grafite + Violeta Elétrico + Lima
========================================================= */

:root {
  --branco: #f5f3ee;
  --cinza-claro: #e5e2da;
  --cinza: #62636b;
  --preto: #111318;

  --rosa: #7c5cff;
  --rosa-fundo: #dcd5ff;

  --accent: #7c5cff;
  --accent-2: #d7f36b;
  --surface: rgba(255, 255, 255, 0.68);
  --surface-strong: rgba(255, 255, 255, 0.88);
  --border: rgba(17, 19, 24, 0.10);
  --shadow: 0 24px 70px rgba(17, 19, 24, 0.09);
}

/* Fundo */
body {
  background: var(--branco);
  color: var(--preto);
  overflow-x: hidden;
}

.page-sobre {
  background:
    radial-gradient(
      circle at 88% 7%,
      rgba(124, 92, 255, 0.18),
      transparent 28%
    ),
    radial-gradient(
      circle at 5% 55%,
      rgba(215, 243, 107, 0.13),
      transparent 25%
    ),
    linear-gradient(
      180deg,
      #f8f7f3 0%,
      #f5f3ee 48%,
      #eeeae2 100%
    );
}

/* Capa mais moderna */
.capa {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 82% 18%,
      rgba(124, 92, 255, 0.28),
      transparent 35%
    ),
    radial-gradient(
      circle at 8% 90%,
      rgba(215, 243, 107, 0.22),
      transparent 32%
    ),
    linear-gradient(
      135deg,
      #faf9f5 0%,
      #eeeaff 55%,
      #f5f3ee 100%
    );
}

.capa::before {
  content: "";
  position: absolute;
  width: 380px;
  height: 380px;
  border: 1px solid rgba(124, 92, 255, 0.18);
  border-radius: 50%;
  right: -150px;
  top: 15%;
  animation: orbita 14s linear infinite;
  pointer-events: none;
}

.capa::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-2);
  right: 18%;
  top: 24%;
  box-shadow:
    0 0 0 8px rgba(215, 243, 107, 0.12),
    0 0 35px rgba(215, 243, 107, 0.5);
  animation: pulsar 2.8s ease-in-out infinite;
  pointer-events: none;
}

.capa-label {
  color: var(--accent);
  font-weight: 700;
}

.capa-nome {
  position: relative;
  line-height: 0.98;
  text-wrap: balance;
}

.capa-nome::after {
  content: "";
  display: inline-block;
  width: 0.22em;
  height: 0.22em;
  margin-left: 0.08em;
  border-radius: 50%;
  background: var(--accent-2);
  box-shadow: 0 0 24px rgba(215, 243, 107, 0.55);
}

/* Foto da capa */
.capa-foto {
  border: 1px solid rgba(17, 19, 24, 0.08);
  border-radius: 18px;
  box-shadow: var(--shadow);
  transform: rotate(2deg);
  transition:
    transform 0.5s cubic-bezier(.2,.8,.2,1),
    box-shadow 0.5s ease;
}

.capa-foto:hover {
  transform: rotate(0deg) translateY(-8px);
  box-shadow: 0 30px 80px rgba(17, 19, 24, 0.15);
}

.capa-foto img {
  transition:
    transform 0.8s cubic-bezier(.2,.8,.2,1),
    filter 0.5s ease;
}

.capa-foto:hover img {
  transform: scale(1.045);
  filter: grayscale(0%);
}

/* Navegação */
.nav-portfolio {
  background: rgba(245, 243, 238, 0.72);
  border-bottom: 1px solid var(--border);
}

.nav-portfolio .nav-link {
  position: relative;
  color: var(--cinza);
  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.nav-portfolio .nav-link::after {
  content: "";
  position: absolute;
  left: 0.7rem;
  right: 0.7rem;
  bottom: 0;
  height: 2px;
  border-radius: 99px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.nav-portfolio .nav-link:hover,
.nav-portfolio .nav-link.active {
  color: var(--preto);
  transform: translateY(-2px);
}

.nav-portfolio .nav-link:hover::after,
.nav-portfolio .nav-link.active::after {
  transform: scaleX(1);
}

/* Títulos */
.secao-kicker {
  color: var(--accent);
  font-weight: 700;
}

.secao-titulo {
  position: relative;
  text-wrap: balance;
}

.linha-rosa {
  width: 64px;
  height: 4px;
  border-radius: 99px;
  background: linear-gradient(
    90deg,
    var(--accent),
    var(--accent-2)
  );
}

/* Tags */
.tag {
  border-color: rgba(124, 92, 255, 0.22);
  background: rgba(124, 92, 255, 0.05);
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}

.tag:hover {
  transform: translateY(-3px);
  background: rgba(124, 92, 255, 0.12);
  border-color: rgba(124, 92, 255, 0.4);
}

/* Cards */
.card-projeto,
.contato-box {
  border-color: var(--border);
  background: var(--surface);
  box-shadow: 0 8px 30px rgba(17, 19, 24, 0.035);
  backdrop-filter: blur(10px);
}

.card-projeto {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(.2,.8,.2,1),
    box-shadow 0.4s ease,
    border-color 0.3s ease;
}

.card-projeto::before {
  content: "";
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(124, 92, 255, 0.12);
  filter: blur(20px);
  right: -60px;
  top: -60px;
  transition: transform 0.5s ease;
}

.card-projeto:hover {
  transform: translateY(-10px) rotate(-0.5deg);
  box-shadow: var(--shadow);
  border-color: rgba(124, 92, 255, 0.22);
}

.card-projeto:hover::before {
  transform: scale(1.7);
}

/* Barras */
.barra {
  background: #dedbd3;
}

.barra span {
  background: linear-gradient(
    90deg,
    var(--accent),
    var(--accent-2)
  );
  position: relative;
  overflow: hidden;
}

.barra span::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,.65),
    transparent
  );
  transform: translateX(-100%);
  animation: brilho 2.8s ease-in-out infinite;
}

/* Botão */
.btn-veja-mais {
  position: relative;
  overflow: hidden;
  border-color: var(--preto);
  background: var(--preto);
  color: #fff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.btn-veja-mais::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 70%;
  height: 100%;
  background: linear-gradient(
    100deg,
    transparent,
    rgba(255,255,255,.28),
    transparent
  );
  transform: skewX(-20deg);
  transition: left 0.55s ease;
}

.btn-veja-mais:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(124, 92, 255, 0.24);
}

.btn-veja-mais:hover::before {
  left: 130%;
}

/* Formulário */
.form-control:focus {
  border-bottom-color: var(--accent);
}

/* =========================================================
   TIMELINE — MAIS INTERESSANTE
========================================================= */

.timeline::before {
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(124, 92, 255, 0.35),
      transparent
    );
}

.timeline-ponto {
  background: var(--accent);
  border-color: var(--branco);
  box-shadow:
    0 0 0 1px rgba(124, 92, 255, 0.15),
    0 0 0 0 rgba(124, 92, 255, 0);
}

.timeline-item:hover .timeline-ponto {
  background: var(--accent-2);
  box-shadow:
    0 0 0 6px rgba(124, 92, 255, 0.12),
    0 0 25px rgba(215, 243, 107, 0.35);
}

.timeline-data {
  transition:
    color 0.25s ease,
    transform 0.3s ease;
}

.timeline-item:hover .timeline-data {
  color: var(--accent);
}

.timeline-foto {
  border-radius: 14px;
  border-color: rgba(124, 92, 255, 0.12);
  box-shadow: 0 18px 40px rgba(17, 19, 24, 0.10);
}

.timeline-item:hover .timeline-foto {
  transform:
    translateY(-5px)
    scale(1.02);
  box-shadow:
    0 25px 55px rgba(17, 19, 24, 0.15);
}

/* =========================================================
   CX
========================================================= */

.secao-cx {
  position: relative;
}

.cx-foto {
  border-radius: 18px;
  box-shadow: var(--shadow);
  transition:
    transform 0.5s cubic-bezier(.2,.8,.2,1),
    box-shadow 0.5s ease;
}

.cx-foto:hover {
  transform: translateY(-8px) rotate(0.5deg);
  box-shadow: 0 30px 75px rgba(17, 19, 24, 0.15);
}

.cx-foto img {
  transition:
    transform 0.8s cubic-bezier(.2,.8,.2,1),
    filter 0.5s ease;
}

.cx-foto:hover img {
  transform: scale(1.045);
  filter: grayscale(0%);
}

/* =========================================================
   ANIMAÇÕES DE ENTRADA
   Funcionam com a classe .revelar + .visivel
========================================================= */

.revelar {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(.2,.8,.2,1);
}

.revelar.visivel {
  opacity: 1;
  transform: translateY(0);
}

.revelar-direita {
  opacity: 0;
  transform: translateX(45px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(.2,.8,.2,1);
}

.revelar-direita.visivel {
  opacity: 1;
  transform: translateX(0);
}

/* Cascata da timeline */
.timeline-item {
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(.2,.8,.2,1);
}

.timeline-item:nth-child(1) { transition-delay: .05s; }
.timeline-item:nth-child(2) { transition-delay: .12s; }
.timeline-item:nth-child(3) { transition-delay: .19s; }
.timeline-item:nth-child(4) { transition-delay: .26s; }
.timeline-item:nth-child(5) { transition-delay: .33s; }
.timeline-item:nth-child(6) { transition-delay: .40s; }

/* Animações */
@keyframes orbita {
  from {
    transform: rotate(0deg) translateX(10px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(10px) rotate(-360deg);
  }
}

@keyframes pulsar {
  0%, 100% {
    transform: scale(1);
    opacity: .75;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

@keyframes brilho {
  0%, 55% {
    transform: translateX(-100%);
  }
  75%, 100% {
    transform: translateX(140%);
  }
}

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Mobile */
@media (max-width: 767.98px) {
  .capa-foto,
  .cx-foto {
    border-radius: 14px;
  }

  .capa::before {
    width: 240px;
    height: 240px;
    right: -120px;
  }
}

.capa-foto:hover,
.cx-foto:hover {
  transform:
    translate(var(--mouse-x, 0px), var(--mouse-y, 0px))
    translateY(-8px)
    rotate(0deg);
}
