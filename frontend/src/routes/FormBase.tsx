export default () => {
    const classNameSet: string = "bg-success text-white";
    return (
        <>
            <main
                className="bg-secondary-subtle d-flex justify-content-center align-items-center"
                style={{ height: "100dvh" }}
            >
                <article
                    className={`${classNameSet} rounded-start d-flex justify-content-center align-items-center flex-column px-5 form-article`}
                >
                    <h1>Bem vindo!</h1>
                    <p className="lead">
                        Sua primeira vez? registre-se e de graça!
                    </p>
                    <p className="lead">
                        Ja tem uma conta? Faça{" "}
                        <a href="#" className="text-light">
                            Login
                        </a>
                    </p>
                    <div>
                        <button className="px-5 btn btn-outline-light rounded-pill">
                            Login
                        </button>
                    </div>
                </article>
                <article className="bg-light rounded-end px-5 d-flex justify-content-center align-items-center form-article">
                    <form action="POST">
                        <h1 className="text-success text-center pb-2">
                            Registrar-se
                        </h1>
                        <div className="text-center pb-3">
                            <aside className="d-flex justify-content-evenly">
                                <button className="btn rounded-circle bg-secondary-subtle">
                                    <i className="bi bi-facebook"></i>
                                </button>
                                <button className="btn rounded-circle bg-secondary-subtle">
                                    <i className="bi bi-whatsapp"></i>
                                </button>
                                <button className="btn rounded-circle bg-secondary-subtle">
                                    <i className="bi bi-linkedin"></i>
                                </button>
                            </aside>
                            <p className="lead text-body-secondary">
                                compartilhe
                            </p>
                        </div>
                        <aside>
                            <div className="input-group ">
                                <a href="#name" className="input-group-text">
                                    <i className="bi bi-person"></i>
                                </a>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div className="input-group py-2">
                                <a href="#email" className="input-group-text">
                                    <i className="bi bi-envelope"></i>
                                </a>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="input-group">
                                <a
                                    href="#password"
                                    className="input-group-text link-underline link-underline-opacity-0"
                                >
                                    @
                                </a>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        </aside>
                        <div className="text-center pt-3">
                            <button
                                type="submit"
                                className="btn btn-success rounded-pill px-5"
                            >
                                <strong>CRIAR</strong>
                            </button>
                        </div>
                    </form>
                </article>
            </main>
        </>
    );
};
