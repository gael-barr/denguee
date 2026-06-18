// Acordeón accesible para criterios clínicos
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Cierra los demás (comportamiento tipo acordeón clásico)
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          other.querySelector('.accordion-body').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
});
