import IconPerson from "../assets/svg/person-circle.svg";

export default () => {
    return (
        <>
            <header className="bg-primary-black navbar navbar-expand">
                <div className="container-fluid">
                    <h1 className="display-1 wd-1 text-light">
                        Percepção Musical App
                    </h1>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-light"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src={IconPerson} alt="person" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Configurações
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <hr />
                                <li>
                                    <a
                                        className="dropdown-item text-danger"
                                        href="/"
                                    >
                                        Sair da conta
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};
