import { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
    const classNameSet: string = "bg-primary text-white";

    const [shownigPass, setShownigPass] = useState(false);
    const [typePassword, setTypePassword] = useState("password");
    const changeViewPassword = () => {
        if (shownigPass) {
            setShownigPass(false);
            setTypePassword("password");
        } else {
            setShownigPass(true);
            setTypePassword("text");
        }
    };
    return (
        <>
            <main
                className="bg-secondary-subtle d-flex justify-content-center align-items-center"
                style={{ height: "100dvh" }}
            >
                <article className="bg-light rounded-start px-5 d-flex justify-content-center align-items-center form-article">
                    <form>
                        <h1 className="text-primary text-center pb-2">
                            Entrar na conta
                        </h1>
                        <div className="text-center pb-3">
                            <aside className="d-flex justify-content-evenly">
                                <button
                                    className="btn rounded-circle bg-secondary-subtle"
                                    type="button"
                                >
                                    <i className="bi bi-facebook"></i>
                                </button>
                                <button
                                    className="btn rounded-circle bg-secondary-subtle"
                                    type="button"
                                >
                                    <i className="bi bi-whatsapp"></i>
                                </button>
                                <button
                                    className="btn rounded-circle bg-secondary-subtle"
                                    type="button"
                                >
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
                                    placeholder="Nome..."
                                    maxLength={256}
                                    minLength={8}
                                    required
                                />
                            </div>
                            <div className="input-group pt-2">
                                <a
                                    href="#password"
                                    className="input-group-text link-underline link-underline-opacity-0"
                                >
                                    @
                                </a>
                                <input
                                    className="form-control"
                                    type={typePassword}
                                    name="password"
                                    id="password"
                                    placeholder="Senha..."
                                    minLength={8}
                                    required
                                />
                                <a
                                    href="#password"
                                    className="input-group-text"
                                    onClick={changeViewPassword}
                                >
                                    {shownigPass ? (
                                        <i className="bi bi-eye-slash-fill"></i>
                                    ) : (
                                        <i className="bi bi-eye-fill"></i>
                                    )}
                                </a>
                            </div>
                        </aside>
                        <div className="text-center pt-3">
                            <button
                                type="submit"
                                className="btn btn-primary rounded-pill px-5"
                            >
                                <strong>LOGIN</strong>
                            </button>
                        </div>
                    </form>
                </article>
                <article
                    className={`${classNameSet} rounded-end d-flex justify-content-center align-items-center flex-column px-5 form-article`}
                >
                    <h1>Ola de novo!</h1>
                    <p className="lead">
                        Sua primeira vez? registre-se e de graça!
                    </p>
                    <p className="lead">Não tem uma conta?</p>
                    <div>
                        <Link
                            to={`/registrar`}
                            className="px-5 btn btn-outline-light rounded-pill"
                        >
                            Cadastre-se
                        </Link>
                    </div>
                </article>
            </main>
        </>
    );
};
