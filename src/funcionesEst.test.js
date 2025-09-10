import {guardarHoraEntrada, guardarHoraSalida, calcularTarifa} from "./funcionesEst.js";

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
    expect(calcularTarifa()).toEqual(20);
  });  
  it("deberia calcular cualquier tarifa de las horas d estacionamiento", () => {
    guardarHoraEntrada("2025-09-09T12:00");
    guardarHoraSalida("2025-09-09T16:00");
    expect(calcularTarifa()).toEqual(40);
  }); 

});


