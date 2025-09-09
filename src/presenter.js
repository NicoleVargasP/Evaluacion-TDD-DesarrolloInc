//import sumar from "./sumador";

const entrada = document.querySelector("#entrada");
const form = document.querySelector("#estacionamiento-form");
const div = document.querySelector("#resultado-div");
const registrarHoraBtn = document.querySelector("#registrar-hora");

registrarHoraBtn.addEventListener("click", () => {
  const fechaHoraEntrada = entrada.value;

  if (!fechaHoraEntrada) {
    div.innerHTML = "<p style='color:red;'>⚠️ Por favor selecciona una fecha y hora</p>";
  } else {
    div.innerHTML = `
      <p>Fecha y hora de entrada del vehículo: ${fechaHoraEntrada}</p>
    `;
  }
});