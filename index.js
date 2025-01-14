document.addEventListener("DOMContentLoaded", function () {
  const btnEl = document.getElementById("btn");
  const bmiInputEl = document.getElementById("bmi-result");
  const weightConditionEl = document.getElementById("weight-condition");

  function calcularIMC() {
    const alturaValor = document.getElementById("height").value / 100;
    const pesoValor = document.getElementById("weight").value;

    const imcValor = pesoValor / (alturaValor * alturaValor);

    bmiInputEl.value = imcValor.toFixed(2);  // Limita o resultado a 2 casas decimais

    if (imcValor < 17) {
      weightConditionEl.innerText = "Subnutrição grave";
    } else if (imcValor >= 17 && imcValor < 18.5) {
      weightConditionEl.innerText = "Abaixo do peso";
    } else if (imcValor >= 18.5 && imcValor <= 24.9) {
      weightConditionEl.innerText = "Peso normal";
    } else if (imcValor >= 25 && imcValor <= 29.9) {
      weightConditionEl.innerText = "Sobrepeso";
    } else if (imcValor >= 30 && imcValor <= 34.9) {
      weightConditionEl.innerText = "Obesidade grau 1";
    } else if (imcValor >= 35 && imcValor <= 39.9) {
      weightConditionEl.innerText = "Obesidade grau 2";
    } else if (imcValor >= 40) {
      weightConditionEl.innerText = "Obesidade grau 3 (Obesidade mórbida)";
    }
  }

  // Evento de clique para calcular o IMC
  btnEl.addEventListener("click", calcularIMC);
});
