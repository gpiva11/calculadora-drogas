function calcDose(min, max, id) {
  const peso = parseFloat(document.getElementById('peso').value);
  if (isNaN(peso)) {
    alert("Informe o peso corretamente.");
    return;
  }

  const minDose = (peso * min).toFixed(2);
  const maxDose = (peso * max).toFixed(2);
  document.getElementById(id).innerText = `Dose: ${minDose} - ${maxDose} mcg/min`;
}

// Alternância entre abas
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('main section').forEach(sec => sec.classList.add('oculto'));
      document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));

      const target = btn.getAttribute('data-tab');
      document.getElementById(target).classList.remove('oculto');
      btn.classList.add('active');
    });
  });
});
