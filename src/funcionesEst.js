let horaEntrada = null;
let horaSalida = null;

function guardarHoraEntrada(fechaHoraEntrada) {
    horaEntrada = fechaHoraEntrada;
    return horaEntrada
}
function guardarHoraSalida(fechaHoraSalida) {
    horaSalida = fechaHoraSalida;
    return horaSalida
  //console.log("Se registro la hora de entrada: ", horaEntrada);
}
function calcularTarifa() {
  let tarifa = 10;
  let tarifaMax =50;  
  const entradaDate = new Date(horaEntrada);
  const salidaDate = new Date(horaSalida);
  const diffMs = salidaDate - entradaDate;
  const diffHoras = Math.ceil(diffMs / (3600000));
  let totalTarifa = diffHoras * tarifa; 
  if (totalTarifa > tarifaMax){ 
    return tarifaMax;
  } 
  else {
    return totalTarifa; 
  }
}
export {guardarHoraEntrada, guardarHoraSalida, calcularTarifa};