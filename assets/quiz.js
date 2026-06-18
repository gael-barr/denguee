// Quiz interactivo de retroalimentación inmediata
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('quiz-submit');
  if (!submitBtn) return;

  submitBtn.addEventListener('click', () => {
    const questions = document.querySelectorAll('.quiz-q');
    let correctCount = 0;
    let answeredCount = 0;

    questions.forEach(q => {
      const correct = q.getAttribute('data-correct');
      const options = q.querySelectorAll('.quiz-option');
      const selected = q.querySelector('input:checked');

      options.forEach(opt => opt.classList.remove('correct', 'incorrect'));

      if (selected) {
        answeredCount++;
        const selectedLabel = selected.closest('.quiz-option');
        if (selected.value === correct) {
          correctCount++;
          selectedLabel.classList.add('correct');
        } else {
          selectedLabel.classList.add('incorrect');
          // Resaltar también la correcta
          options.forEach(opt => {
            const input = opt.querySelector('input');
            if (input.value === correct) opt.classList.add('correct');
          });
        }
      } else {
        // Si no respondió, mostrar la correcta en verde tenue
        options.forEach(opt => {
          const input = opt.querySelector('input');
          if (input.value === correct) opt.classList.add('correct');
        });
      }
    });

    const result = document.getElementById('quiz-result');
    const total = questions.length;
    result.style.display = 'block';

    if (answeredCount < total) {
      result.textContent = `Respondiste ${answeredCount} de ${total} preguntas. Contesta todas para ver tu calificación completa. Aciertos hasta ahora: ${correctCount}.`;
    } else if (correctCount === total) {
      result.textContent = `¡Excelente! Acertaste ${correctCount} de ${total}. Dominas los conceptos clave de prevención y signos de alarma del dengue.`;
    } else if (correctCount >= total - 1) {
      result.textContent = `Muy bien: ${correctCount} de ${total} correctas. Revisa la respuesta marcada en rojo para reforzar ese punto.`;
    } else {
      result.textContent = `Obtuviste ${correctCount} de ${total} correctas. Te recomendamos repasar las secciones de "Público general" y "Mapa mental" antes de continuar.`;
    }

    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});
