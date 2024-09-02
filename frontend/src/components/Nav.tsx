import { Link } from "react-router-dom";

export default () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-principal">
                <div className="container container-fluid">
                    <Link to={`/`} className="navbar-brand text-white">
                        PMAPP
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to={`registro-login`}
                                    className="nav-link text-white"
                                >
                                    Cadastrar-se
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to={`registro-login`}
                                    className="nav-link text-white"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
