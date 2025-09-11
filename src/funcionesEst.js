let horaEntrada = null;
let horaSalida = null;
let tarifa = 10;
let tarifaMax =50;  
let tarifaNocturna = 6;
let tieneTicket = false;

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

  if (salida <= entrada){
     return null;
  }
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
function calcularTarifaDias() { 
  const entrada = new Date(horaEntrada);
  const salida = new Date(horaSalida);

  if (salida <= entrada) {
     return null;
  }

  const desglose = {}; 
  let horaActual = new Date(entrada);

  while (horaActual < salida) {
    const diaClave = horaActual.toISOString().split("T")[0]; // YYYY-MM-DD
    const hora = horaActual.getHours();

    if (!desglose[diaClave]) {
      desglose[diaClave] = { subtotal: 0, cobrado: 0 };
    }

    if (hora >= 22 || hora < 6) {
      desglose[diaClave].subtotal += tarifaNocturna;
    } else {
      desglose[diaClave].subtotal += tarifa;
    }

    horaActual = new Date(horaActual.getTime() + 3600000); 
  }

  for (const dia in desglose) {
    desglose[dia].cobrado = Math.min(desglose[dia].subtotal, tarifaMax);
    desglose[dia].subtotal = parseFloat(desglose[dia].subtotal.toFixed(2));
    desglose[dia].cobrado = parseFloat(desglose[dia].cobrado.toFixed(2));
  }

  const total = Object.values(desglose).reduce((sum, d) => sum + d.cobrado, 0);

  return { desglose, total };
}

function perdidaTicket(tieneTicket){ 
    let tarifaTicket;
    let multa = 80;
if (tieneTicket === false){ 
    tarifaTicket = multa;
}
else { 
    tarifaTicket = calcularTarifa();  
}
return tarifaTicket
}
export {guardarHoraEntrada, guardarHoraSalida, calcularTarifa, perdidaTicket, calcularTarifaDias};