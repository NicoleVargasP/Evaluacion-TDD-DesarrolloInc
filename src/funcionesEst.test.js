import {guardarHoraEntrada} from "./funcionesEst.js";

describe("FuncionesEstacionamiento", () => {
  it("deberia mostrar la hora de entreda", () => {
    expect(guardarHoraEntrada("10:30")).toEqual("10:30");
  });
  it("deberia mostrar cualquier hora de entreda", () => {
    expect(guardarHoraEntrada("10:15")).toEqual("10:15");
  });
});


