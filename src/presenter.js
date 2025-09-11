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
  if (!tieneTicket) {
    div.innerHTML += `<p><b>Total a pagar:</b> Bs 80 (multa por ticket perdido)</p>`;
    return;
  }
  const tarifaDetallada = calcularTarifaDias();

  if (tarifaDetallada === null) {
    div.innerHTML += `<p>La salida debe ser posterior a la entrada</p>`;
    return;
  }
  div.innerHTML += `<h3>Desglose por día:</h3>`;
  for (const dia in tarifaDetallada.desglose) {
    const detalle = tarifaDetallada.desglose[dia];
    div.innerHTML += `<p><b>${dia}</b> → Subtotal: Bs ${detalle.subtotal}, Cobrado: Bs ${detalle.cobrado}</p>`;
  }
  div.innerHTML += `<p><b>Total a pagar:</b> Bs ${tarifaDetallada.total.toFixed(2)}</p>`;
});