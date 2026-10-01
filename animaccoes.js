

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(
    ".secao-kicker, .secao-titulo, .linha-rosa, " +
    ".sobre-detalhes-foto, .sobre-detalhes-texto, .sobre-detalhes-meta, " +
    ".lang-item, .transicao-cx-frase, " +
    ".cx-foto, .cx-tags, .card-projeto, .contato-box"
  );

  const reduzirMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const observaveis = Array.from(elementos).filter((elemento) => {
    return !elemento.closest("#robotica");
  });

  observaveis.forEach((elemento, index) => {
    elemento.classList.add("reveal-scroll");

    if (
      elemento.classList.contains("sobre-detalhes-foto") ||
      elemento.classList.contains("cx-foto")
    ) {
      elemento.classList.add("reveal-left");
    }

    if (elemento.classList.contains("card-projeto")) {
      elemento.classList.add("reveal-scale");
    }

    const delay = Math.min((index % 5) * 70, 280);
    elemento.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  if (reduzirMovimento) {
    observaveis.forEach((elemento) => {
      elemento.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        entrada.target.classList.add("is-visible");
        observador.unobserve(entrada.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -70px 0px"
    }
  );

  observaveis.forEach((elemento) => observer.observe(elemento));
});