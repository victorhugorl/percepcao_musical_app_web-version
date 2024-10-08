import { Link } from "react-router-dom";
import LevelDesign from "../components/LevelDesign";

export default () => {
    // preciso fazer um get em uma URL para coletar as informações basicas do user
    const levelNumber: number = 0;
    const dayNumber: number = 0;

    return (
        <>
            <header className="bg-dark-blue p-2 text-light">
                <nav className="container d-flex align-items-center justify-content-between">
                    <Link className="navbar-brand" to={`/painel`}>
                        <h1>Percepção Musical App</h1>
                    </Link>
                    {/* configurando caminho para CONFIGURAÇÕES */}
                    <Link to={`/`}>
                        <i className="bi bi-gear fs-3 text-light"></i>
                    </Link>
                </nav>
            </header>
            <main className="container pt-3">
                <article className="row">
                    <div className="col-md-5 border rounded shadow p-3">
                        <h3>Nivel {levelNumber}</h3>
                        <p>Alguma informação sobre o nivel atual</p>
                    </div>
                    <div className="col-md-5 p-3 text-end">
                        <h3>
                            Dias{" "}
                            <span className="text-body-secondary">
                                {dayNumber}
                            </span>
                        </h3>
                    </div>
                </article>
                <LevelDesign />
            </main>
        </>
    );
};
