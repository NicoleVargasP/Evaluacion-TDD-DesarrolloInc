//import sumar from "./sumador";

const entrada = document.querySelector("#entrada");
const registrarHoraEntBtn = document.querySelector("#registrar-horaEnt");
const salida = document.querySelector("#salida");
const registrarHoraSalBtn = document.querySelector("#registrar-horaSal");
const form = document.querySelector("#estacionamiento-form");
const div = document.querySelector("#resultado-div");

registrarHoraBtnEnt.addEventListener("click", () => {
  const fechaHoraEntrada = entrada.value;
  if (!fechaHoraEntrada) {
    div.innerHTML = "<p style='color:red;'>⚠️ Por favor selecciona una fecha y hora</p>";
  } else {
    div.innerHTML = `
      <p>Fecha y hora de entrada del vehículo: ${fechaHoraEntrada}</p>
    `;
  }
});
registrarHoraBtnSal.addEventListener("click", () => {
  const fechaHoraSalida = salida.value;
  if (!fechaHoraSalida) {
    div.innerHTML = "<p style='color:red;'>⚠️ Por favor selecciona una fecha y hora</p>";
  } else {
    div.innerHTML = `
      <p>Fecha y hora de salida del vehículo: ${fechaHoraSalida}</p>
    `;
  }
});

