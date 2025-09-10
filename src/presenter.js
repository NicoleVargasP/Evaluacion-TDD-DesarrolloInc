import { guardarHoraEntrada, guardarHoraSalida, calcularTarifa } from "./funcionesEst.js";

const entrada = document.querySelector("#entrada");
const registrarHoraEntBtn = document.querySelector("#registrar-horaEnt");
const salida = document.querySelector("#salida");
const registrarHoraSalBtn = document.querySelector("#registrar-horaSal");
const calcularTarifaBtn = document.querySelector("#calcular-tarifa");
const form = document.querySelector("#estacionamiento-form");
const div = document.querySelector("#resultado-div");

registrarHoraEntBtn.addEventListener("click", () => {
   const fechaHoraEntrada = entrada.value;
  if (!fechaHoraEntrada) {
    div.innerHTML += "<p style='color:red;'>⚠️ Por favor selecciona una fecha y hora</p>";
  } else {
    div.innerHTML += `
      <p>Fecha y hora de entrada del vehículo: ${fechaHoraEntrada}</p>
    `;
    guardarHoraEntrada(fechaHoraEntrada); 
  }
});
registrarHoraSalBtn.addEventListener("click", () => {
  const fechaHoraSalida = salida.value;
  if (!fechaHoraSalida) {
    div.innerHTML += "<p style='color:red;'>⚠️ Por favor selecciona una fecha y hora</p>";
  } else {
    div.innerHTML += `
      <p>Fecha y hora de salida del vehículo: ${fechaHoraSalida}</p>
    `;
    guardarHoraSalida(fechaHoraSalida); 
  }
});
calcularTarifaBtn.addEventListener("click", () => {
  const total = calcularTarifa();
  div.innerHTML += `<p><b>Total a pagar:</b> Bs ${total}.00</p>`;
});
