import { guardarHoraEntrada, guardarHoraSalida, calcularTarifa, perdidaTicket } from "./funcionesEst.js";

const entrada = document.querySelector("#entrada");
const registrarHoraEntBtn = document.querySelector("#registrar-horaEnt");
const salida = document.querySelector("#salida");
const registrarHoraSalBtn = document.querySelector("#registrar-horaSal");
const calcularTarifaBtn = document.querySelector("#calcular-tarifa");
const mostrarTicketBtn = document.querySelector("#mostrar-ticket");
const opcionesTicketDiv = document.querySelector("#opciones-ticket");
const form = document.querySelector("#estacionamiento-form");
const div = document.querySelector("#resultado-div");

mostrarTicketBtn.addEventListener("click", () => {
  // alterna entre mostrar y ocultar
  if (opcionesTicketDiv.style.display === "none") {
    opcionesTicketDiv.style.display = "block";
  } else {
    opcionesTicketDiv.style.display = "none";
  }
});
registrarHoraEntBtn.addEventListener("click", () => {
   const fechaHoraEntrada = entrada.value;
  if (!fechaHoraEntrada) {
    div.innerHTML += "<p> Por favor selecciona una fecha y hora</p>";
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
    div.innerHTML += "<p> Por favor selecciona una fecha y hora</p>";
  } else {
    div.innerHTML += `
      <p>Fecha y hora de salida del vehículo: ${fechaHoraSalida}</p>
    `;
    guardarHoraSalida(fechaHoraSalida); 
  }
});

calcularTarifaBtn.addEventListener("click", () => {
  const ticketSeleccionado = document.querySelector('input[name="ticket"]:checked').value;
  const tieneTicket = ticketSeleccionado === "con";

  const totalFinal = perdidaTicket(tieneTicket);
if (totalFinal === null) {
    div.innerHTML += `<p La salida debe ser posterior a la entrada</p>`;
  } else {
    div.innerHTML += `<p><b>Total a pagar:</b> Bs ${totalFinal.toFixed(2)}</p>`;
  }
});