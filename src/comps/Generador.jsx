import "../styles/Generador.scss";
import React from "react";
import { useForm } from "react-hook-form";

export default function GeneradorTool() {
  const { register, handleSubmit } = useForm();

  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };

  const toJSON = (array) => {
    const once = [];
    for (let i = 1; i <= 11; i++) {
      const [posicion, nombre, media] = array[i]
        .split("-")
        .map((item) => item.trim());
      once.push({ posicion, nombre, media });
    }
    return {
      equipo: array[0],
      entrenador: array[12],
      imagen: array[13],
      once: once,
    };
  };

  const onSubmit = async (data) => {
    const local = data.localFile[0];
    const visitor = data.visitorFile[0];

    if (!local || !visitor) {
      alert("Falta uno de los archivos.");
      return;
    }

    try {
      const localFileContent = await readFileAsText(local);
      const visitorFileContent = await readFileAsText(visitor);

      const localData = toJSON(
        localFileContent.split("\n").map((line) => line.replace(/\r$/, ""))
      );
      const visitorData = toJSON(
        visitorFileContent.split("\n").map((line) => line.replace(/\r$/, ""))
      );

      const resultArray = [data.isBuffActive, localData, visitorData];
      console.log(resultArray);
    } catch (error) {
      console.error("Error reading files:", error);
    }
  };

  return (
    <div className="gentool-body d-flex flex-column align-items-center col-12">
      <h3 className="mt-4 text-center">Generador Zentella 6.0 (DEMO)</h3>
      <div className="col-12 d-flex flex-row align-items-center justify-content-center">
        <img
          className="m-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Escudo_vacío.png/647px-Escudo_vacío.png"
          alt="error"
        ></img>
        <div className="d-flex flex-row align-items-center justify-content-center text-center">
          Equipo Local
        </div>
        <h2 className="col-3 d-flex flex-row align-items-center justify-content-center">
          0-0
        </h2>
        <div className="d-flex flex-row align-items-center justify-content-center text-center">
          Equipo Visitante
        </div>
        <img
          className="m-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Escudo_vacío.png/647px-Escudo_vacío.png"
          alt="error"
        ></img>
      </div>
      <div className="col-12 d-flex flex-row ">
        <form
          className="col-12 d-flex flex-column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-12 d-flex flex-row">
            <div className="col-6 d-flex flex-column align-items-center">
              <label>Introduce archivo de equipo local</label>
              <input type="file" {...register("localFile")}></input>
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
              <label>Introduce archivo de equipo visitante</label>
              <input type="file" {...register("visitorFile")}></input>
            </div>
          </div>
          <h5 className="col-12 mt-5 d-flex flex-column align-items-center">
            Opciones
          </h5>
          <div className="col-12 mb-4 d-flex flex-row align-items-center justify-content-center">
            <div className="col-3">
              <label className="m-2">Activar buff de local</label>
              <input type="checkbox" {...register("isBuffActive")}></input>
            </div>
            <div className="col-3">
              <input
                className="w-100"
                type="submit"
                value="Generar partido"
              ></input>
            </div>
            <div className="col-3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
