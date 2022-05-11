function App() {
  return (
    <div className="row" style={{ width: 950 }}>
      <div className="col" style={{ background: "#D8F5FF" }}>
        <div className="row card m-4 p-3 shadow" style={{ width: 400 }}>
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
              <span className="row">
                <h3>Calculadora del futuro</h3>

                <div className="row">
                  <div className="col">
                    <span className="row">
                      <input
                        style={{ fontSize: "2rem", textAlign: "right" }}
                        id="operacion"
                      ></input>
                    </span>
                    <br></br>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <span className="row ms-0 me-0">
                      <button type="button" className="btn btn-warning">
                        Limpiar
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <span className="row ms-0 me-0">
                          <button type="button" className="btn btn-warning">
                            C
                          </button>
                        </span>
                      </div>

                      <div className="col">
                        <span className="row ms-0 me-0">
                          <button type="button" className="btn btn-warning">
                            /
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        7
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        8
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        9
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-warning">
                        X
                      </button>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        4
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        5
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        6
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-warning">
                        -
                      </button>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        1
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        2
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-primary">
                        3
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button type="button" className="btn btn-warning">
                        +
                      </button>
                    </span>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <span className="row ms-0 me-0">
                          <button type="button" className="btn btn-primary">
                            0
                          </button>
                        </span>
                      </div>

                      <div className="col">
                        <span className="row ms-0 me-0">
                          <button type="button" className="btn btn-primary">
                            .
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <span className="row ms-0 me-0">
                      <button type="button" className="btn btn-warning">
                        =
                      </button>
                    </span>
                  </div>
                </div>
              </span>

              <br></br>
            </div>
          </div>
        </div>
      </div>

      {/*Aqí empieza el div del historial*/}

      <div
        className="col"
        style={{ width: 400, background: "#5C5C5C" }}
      >
        <span className="row">
          <div
            className="row card m-4 p-3 shadow"
            style={{ width: 400, left: 0, height:440 }}
          >
            <h3>Historial de operaciones</h3>
          </div>
        </span>
      </div>
    </div>
  );
}

export default App;
