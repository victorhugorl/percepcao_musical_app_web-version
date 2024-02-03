import Header from "@s:pm_app/src/components/Header";

export default () => {
    // Tentativa de importar a CDN
    // <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>;

    // function newChart(ctx, date) {
    //     new Chart(ctx, {
    //         type: "bar",
    //         data: {
    //             labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //             datasets: [
    //                 {
    //                     label: "numbers of Votes",
    //                     data: [
    //                         date[0],
    //                         date[1],
    //                         date[2],
    //                         date[3],
    //                         date[4],
    //                         date[5]
    //                     ],
    //                     // data: [12, 19, 3, 5, 2, 3],
    //                     borderWidth: 1
    //                 }
    //             ]
    //         },
    //         options: {
    //             scales: {
    //                 y: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         }
    //     });
    // }

    // const ctx = document.getElementById("graficOne"); // fazendo uns testes so pra rir depois deixo menor e bem feito
    // const data = [12, 19, 3, 5, 2, 3];

    // newChart(ctx, data); // Se quiser dentro da function consumir uma api

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div
                            className="offcanvas-md offcanvas-end bg-body-tertiary"
                            tabIndex="-1"
                            id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel"
                        >
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                        >
                                            <i className="bi bi-house"></i>
                                            Topo
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            href="#"
                                        >
                                            <i className="bi bi-file-earmark-music"></i>
                                            Acorde
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            href="#"
                                        >
                                            <i className="bi bi-music-note-list"></i>
                                            Escalas
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            href="#"
                                        >
                                            <i className="bi bi-calendar2-range"></i>
                                            Progres.
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            href="#"
                                        >
                                            <i className="bi bi-music-note-beamed"></i>
                                            Notas
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            href="#"
                                        >
                                            <i className="bi bi-earbuds"></i>
                                            Ouvido abs
                                        </a>
                                    </li>
                                </ul>

                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                    <span>Outras opções</span>
                                </h6>
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            href="#"
                                        >
                                            <i className="bi bi-play-fill"></i>
                                            Jogar
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Painel Principal</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                    >
                                        Share
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                    >
                                        Export
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
                                >
                                    This week
                                </button>
                            </div>
                        </div>

                        <canvas
                            className="my-4 w-100"
                            id="graficOne"
                            width="1814"
                            height="766"
                        ></canvas>

                        {/* <!--graficTwo deixar salvo aqui--> */}

                        <h2>Section title</h2>
                        <div className="table-responsive small">
                            <div className="bg-primary-black text-light rounded-4">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Treinamentos</th>
                                            <th>%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>teste 1</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>Escalas</td>
                                            <td>30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};
