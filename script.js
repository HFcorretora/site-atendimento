// Função para mostrar/ocultar menu mobile
function toggleMenu() {
  const nav = document.getElementById('menu-links');
  nav.classList.toggle('active');
}

// Scroll suave para seção services
function scrollToSection() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// WhatsApp - abrir link já com mensagem
function getwhatsapp(msg) {
  const phone = '5521999999999'; // substitua pelo seu número
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Botão flutuante WhatsApp
function openWhatsapp() {
  const phone = '5521999999999'; // substitua pelo seu número
  window.open(`https://wa.me/${phone}`, '_blank');
}

// Reveal on scroll (fade + subir)
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

function getwhatsapp(message, phone = '556292454182') {
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(link, '_blank');
}

function openWhatsapp(phone = '556292454182') {
  const message = 'Olá! Gostaria de atendimento';
  getwhatsapp(message, phone);
}
