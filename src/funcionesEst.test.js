import {guardarHoraEntrada} from "./funcionesEst.js";

describe("FuncionesEstacionamiento", () => {
  it("deberia mostrar la hora de entreda", () => {
    expect(guardarHoraEntrada()).toEqual("10:30");
  });
});


