document.addEventListener("DOMContentLoaded", () => {

  // Seleciona todos os elementos que terão animação ao aparecer na tela
  const elementos = document.querySelectorAll(
    ".secao-kicker, .secao-titulo, .linha-rosa, " +
    ".sobre-detalhes-foto, .sobre-detalhes-texto, .sobre-detalhes-meta, " +
    ".lang-item, .transicao-cx-frase, " +
    ".cx-foto, .cx-tags, .card-projeto, .contato-box"
  );

  // Verifica se o usuário prefere reduzir animações
  const reduzirMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Remove a timeline da animação de rolagem
  // porque ela possui suas próprias interações
  const observaveis = Array.from(elementos).filter((elemento) => {
    return !elemento.closest("#robotica");
  });

  // Adiciona as configurações de animação em cada elemento
  observaveis.forEach((elemento, index) => {

    // Classe principal da animação
    elemento.classList.add("reveal-scroll");

    // Imagens entram pela esquerda
    if (
      elemento.classList.contains("sobre-detalhes-foto") ||
      elemento.classList.contains("cx-foto")
    ) {
      elemento.classList.add("reveal-left");
    }

    // Cards entram com efeito de escala
    if (elemento.classList.contains("card-projeto")) {
      elemento.classList.add("reveal-scale");
    }

    // Cria um pequeno atraso entre os elementos
    const delay = Math.min((index % 5) * 70, 280);

    // Envia o atraso para o CSS
    elemento.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  // Se o usuário tiver redução de movimento ativada,
  // mostra todos os elementos sem animação
  if (reduzirMovimento) {

    observaveis.forEach((elemento) => {
      elemento.classList.add("is-visible");
    });

    return;
  }

  // Observa quando os elementos entram na área visível da tela
  const observer = new IntersectionObserver(
    (entradas, observador) => {

      entradas.forEach((entrada) => {

        // Ignora elementos que ainda não apareceram na tela
        if (!entrada.isIntersecting) return;

        // Ativa a animação adicionando a classe is-visible
        entrada.target.classList.add("is-visible");

        // Para de observar depois que a animação acontece
        observador.unobserve(entrada.target);
      });
    },
    {
      // Percentual do elemento que precisa aparecer na tela
      threshold: 0.12,

      // Faz a animação começar um pouco antes
      rootMargin: "0px 0px -70px 0px"
    }
  );

  // Começa a observar todos os elementos selecionados
  observaveis.forEach((elemento) => observer.observe(elemento));
});