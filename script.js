// Crear IntersectionObserver para animar al hacer scroll
const observer = new IntersectionObserver(entries => { // Función de api js scrip//
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

// Seleccionar secciones específicas del HTML
const elementosAnimados = document.querySelectorAll(
  '.intro, .contenido-item, .promo, .contacto'
);

// Aplicar estilos iniciales y observar
elementosAnimados.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Mostrar mensaje al enviar formulario en el lading page
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(e) {
  e.preventDefault(); // evita que se recargue la página
  alert("¡Mensaje enviado con éxito! Pronto nos comunicaremos contigo gracias por la preferencia.");
  formulario.reset(); // limpia el formulario
});
