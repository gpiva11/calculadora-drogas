const drogas = [
  { nome: "Noradrenalina", dose: "0,05–1 mcg/kg/min", categoria: "DVA" },
  { nome: "Vasopressina", dose: "0,01–0,04 UI/min", categoria: "DVA" },
  { nome: "Adrenalina", dose: "0,01–1 mcg/kg/min", categoria: "DVA" },
  { nome: "Dobutamina", dose: "2–20 mcg/kg/min", categoria: "DVA" },
  { nome: "Dopamina", dose: "2–20 mcg/kg/min", categoria: "DVA" },
  { nome: "Milrinone", dose: "0,25–0,75 mcg/kg/min", categoria: "DVA" },
  { nome: "Levosimedan", dose: "0,1 mcg/kg/min", categoria: "DVA" },
  { nome: "Nitroprussiato de Sódio", dose: "0,3–10 mcg/kg/min", categoria: "Vasodilatador" },
  { nome: "Nitroglicerina", dose: "5–200 mcg/min", categoria: "Vasodilatador" },
  { nome: "Fentanil", dose: "1–3 mcg/kg", categoria: "Analgésico" },
  { nome: "Morfina", dose: "2–4 mg IV", categoria: "Analgésico" },
  { nome: "Remifentanil", dose: "0,05–2 mcg/kg/min", categoria: "Analgésico" },
  { nome: "Dexmedetomidina", dose: "0,2–1,5 mcg/kg/h", categoria: "Analgésico/Sedativo" },
  { nome: "Midazolam", dose: "0,05–0,1 mg/kg", categoria: "Sedativo" },
  { nome: "Etomidato", dose: "0,2–0,3 mg/kg", categoria: "Sedativo" },
  { nome: "Quetamina", dose: "1–2 mg/kg IV", categoria: "Sedativo" },
  { nome: "Propofol", dose: "1–3 mg/kg", categoria: "Sedativo" },
  { nome: "Quetofol", dose: "Propofol + Quetamina (1:1)", categoria: "Sedativo" },
  { nome: "Succinilcolina", dose: "1–1,5 mg/kg", categoria: "Bloqueador Neuromuscular" },
  { nome: "Rocurônio", dose: "0,6–1,2 mg/kg", categoria: "Bloqueador Neuromuscular" },
  { nome: "Cisatracúrio", dose: "0,1–0,2 mg/kg", categoria: "Bloqueador Neuromuscular" }
];

function mostrarAba(aba) {
  const main = document.getElementById("conteudo");
  if (aba === "drogas") {
    main.innerHTML = drogas.map(d => `
      <div class="droga">
        <h2>${d.nome}</h2>
        <p><strong>Categoria:</strong> ${d.categoria}</p>
        <p><strong>Dose:</strong> ${d.dose}</p>
      </div>
    `).join("");
  } else if (aba === "intubacao") {
    main.innerHTML = `
      <h2>7 Passos da Intubação Segura</h2>
      <ol>
        <li>Preparação</li>
        <li>Pré-oxigenação</li>
        <li>Pré-tratamento</li>
        <li>Indução</li>
        <li>Paralisia com bloqueador neuromuscular</li>
        <li>Posicionamento e intubação</li>
        <li>Confirmação da posição e cuidados pós-intubação</li>
      </ol>
    `;
  } else if (aba === "referencias") {
    main.innerHTML = `
      <h2>Referências</h2>
      <ul>
        <li>UpToDate</li>
        <li>Diretrizes de Medicina de Emergência - AMIB, ACEP</li>
      </ul>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => mostrarAba("drogas"));