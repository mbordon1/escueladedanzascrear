const elementos = document.querySelectorAll('.fade-in');

const mostrarAlHacerScroll = () => {
  const alturaVentana = window.innerHeight;
  elementos.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < alturaVentana - 60) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarAlHacerScroll);
window.addEventListener('load', mostrarAlHacerScroll);

window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 80);
});

const btnTop = document.getElementById("btnTop");

// Mostrar botón al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.classList.add("visible");
  } else {
    btnTop.classList.remove("visible");
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const distanciaFooter = footer.getBoundingClientRect().top;
  const altoVentana = window.innerHeight;
  if (distanciaFooter < altoVentana - 120) {
    btnTop.classList.remove("visible");
  }
});