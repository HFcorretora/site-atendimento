// Função para mostrar/ocultar menu mobile
function toggleMenu() {
  const nav = document.getElementById('menu-links');
  nav.classList.toggle('active');
}

// Scroll suave para seção "services"
function scrollToSection() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

// Abrir WhatsApp com mensagem personalizada
function getwhatsapp(message, phone = '551151073015') {
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(link, '_blank');
}

// Botão flutuante de WhatsApp (mensagem padrão)
function openWhatsapp(phone = '551151073015') {
  const message = 'Olá! Gostaria de atendimento';
  getwhatsapp(message, phone);
}

// Reveal on scroll (efeito de aparecer ao rolar a página)
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
