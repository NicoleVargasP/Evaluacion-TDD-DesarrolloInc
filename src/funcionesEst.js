let horaEntrada = null;
let horaSalida = null;
let tarifa = 10;
let tarifaMax =50;  
let tarifaNocturna = 6;
const horaSiguiente = 0;
let total = 0;

function guardarHoraEntrada(fechaHoraEntrada) {
    horaEntrada = fechaHoraEntrada;
    return horaEntrada
}
function guardarHoraSalida(fechaHoraSalida) {
    horaSalida = fechaHoraSalida;
    return horaSalida
}
function calcularTarifa() { 
  
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);

  if (salida <= entrada)
     return "La salida debe ser posterior";

  let total = 0;
  let horaActual = new Date(entrada);

  while (horaActual < salida) {
    const hora = horaActual.getHours();

    if (hora >= 22 || hora < 6) {
      total += tarifaNocturna; 
    } else {
      total += tarifa; 
    }
    horaActual = new Date(horaActual.getTime() + 3600000); 
  }
  if (total > tarifaMax) return tarifaMax;
  return parseFloat(total.toFixed(2));
}
export {guardarHoraEntrada, guardarHoraSalida, calcularTarifa};