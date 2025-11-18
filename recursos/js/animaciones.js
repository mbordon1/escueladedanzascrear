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

