import "../styles/Generador.scss";

export default function GeneradorTool() {
  return (
    <div className="gentool-body d-flex flex-column align-items-center col-12">
      <h3 className="mt-4 text-center">Generador Zentella 6.0 (DEMO)</h3>
      <div className="col-12 d-flex flex-row align-items-center justify-content-center">
        <img className="m-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Escudo_vacío.png/647px-Escudo_vacío.png" alt="error"></img>
        <div className="d-flex flex-row align-items-center justify-content-center text-center">Equipo Local</div>
        <h2 className="col-3 d-flex flex-row align-items-center justify-content-center">0-0</h2>
        <div className="d-flex flex-row align-items-center justify-content-center text-center">Equipo Visitante</div>
        <img className="m-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Escudo_vacío.png/647px-Escudo_vacío.png" alt="error"></img>
      </div>
      <div className="col-12 d-flex flex-row ">
        <form className="col-12 d-flex flex-column">
          <div className="col-12 d-flex flex-row">
            <div className="col-6 d-flex flex-column align-items-center">
              <label>Introduce archivo de equipo local</label>
              <input type="file"></input>
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
              <label>Introduce archivo de equipo visitante</label>
              <input type="file"></input>
            </div>
          </div>
          <h5 className="col-12 mt-5 d-flex flex-column align-items-center">Opciones</h5>
          <div className="col-12 d-flex flex-row align-items-center justify-content-center">
            <div className="col-3">
              <label className="m-2">Activar buff de local</label>
              <input type="checkbox"></input>
            </div>
            <div className="col-3">
              <input className="w-100" type="submit" value="Generar partido"></input>
            </div>
            <div className="col-3">
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
