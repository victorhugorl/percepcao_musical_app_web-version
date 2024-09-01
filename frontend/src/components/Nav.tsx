import { Link } from "react-router-dom";

export default () => {
    return (
        <>
            <nav className="container  navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to={`/`} className="navbar-brand">
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
                                <Link to={`cadastrar`} className="nav-link">
                                    Cadastrar-se
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`login`} className="nav-link">
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
