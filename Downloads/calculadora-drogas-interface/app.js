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
