import { Link } from "react-router-dom";
import LevelDesign from "../components/LevelDesign";

export default () => {
    const levelNumber: number = 0;

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
                        <p>Alguma informação aqui</p>
                    </div>
                    <div className="col-md-5 p-3 text-end">
                        <h3>Textinho 2</h3>
                        <p>Alguma informação aqui 2</p>
                        <p>Outras medidas de texto</p>
                        <p>Talvez uso de uma lista simples</p>
                    </div>
                </article>
                <LevelDesign />
            </main>
        </>
    );
};
