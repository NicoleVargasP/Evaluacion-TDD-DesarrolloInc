import {guardarHoraEntrada, guardarHoraSalida, calcularTarifa, perdidaTicket, calcularTarifaDias} from "./funcionesEst.js";

describe("FuncionesEstacionamiento", () => {
  it("deberia mostrar la hora de entreda", () => {
    expect(guardarHoraEntrada("10:30")).toEqual("10:30");
  });
  it("deberia mostrar cualquier hora de entreda", () => {
    expect(guardarHoraEntrada("10:15")).toEqual("10:15");
  });
   it("deberia mostrar la hora de salida", () => {
    expect(guardarHoraSalida("11:15")).toEqual("11:15");
  });
  it("deberia mostrar cualquier hora de salida", () => {
    expect(guardarHoraSalida("11:30")).toEqual("11:30");
  }); 
   it("deberia calcular la tarifa de las horas d estacionamiento", () => {
     guardarHoraEntrada("2025-09-09T11:00");
     guardarHoraSalida("2025-09-09T13:00");
    expect(calcularTarifa()).toEqual(20.00);
  });  
  it("deberia calcular cualquier tarifa de las horas d estacionamiento", () => {
    guardarHoraEntrada("2025-09-09T12:00");
    guardarHoraSalida("2025-09-09T16:00");
    expect(calcularTarifa()).toEqual(40.00);
  }); 
  it("deberia validar que el monto maximo sea 50 Bs", () => {
    guardarHoraEntrada("2025-09-09T10:00");
    guardarHoraSalida("2025-09-09T18:00");
    expect(calcularTarifa()).toEqual(50.00);
  }); 
   it("deberia validar que la tarifa maxima a cobrar de noche es 6 Bs", () => {
    guardarHoraEntrada("2025-09-09T20:00");
    guardarHoraSalida("2025-09-09T23:00");
    expect(calcularTarifa()).toEqual(26.00);
  }); 
   it("deberia validar que la tarifa maxima a cobrar de noche es 6 Bs", () => {
    guardarHoraEntrada("2025-09-09T22:00");
    guardarHoraSalida("2025-09-10T02:00");
    expect(calcularTarifa()).toEqual(24.00);
  });
   it("deberia cobrar 80 Bs si perdio el ticket", () => {
    guardarHoraEntrada("2025-09-09T14:00");
    guardarHoraSalida("2025-09-10T21:00");
    expect(perdidaTicket(false)).toEqual(80.00);
  }); 
    it("deberia verificar que no se ingrese una hora de entrada posterior a la hora d salida", () => {
    guardarHoraEntrada("2025-09-11T14:00");
    guardarHoraSalida("2025-09-10T21:00");
     expect(calcularTarifa()).toEqual(null);
  });  
});


