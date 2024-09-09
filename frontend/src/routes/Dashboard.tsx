import { Link } from "react-router-dom";

export default () => {
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
                    <div className="col-md-6">
                        <h3>Textinho</h3>
                        <p>Alguma informação aqui</p>
                    </div>
                    <div className="col-md-6">2</div>
                </article>
            </main>
        </>
    );
};
