function calcularDose(nome, minDose, maxDose) {
  const peso = parseFloat(document.getElementById("peso").value);
  if (isNaN(peso) || peso <= 0) {
    alert("Por favor, insira um peso válido.");
    return;
  }

  const min = (minDose * peso).toFixed(2);
  const max = (maxDose * peso).toFixed(2);
  const resultado = `Dose recomendada: ${min} a ${max} mcg/min`;

  document.getElementById("resultado-" + nome).textContent = resultado;
}