import { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
    user: string;
    email: string;
    password: string;
}

export default () => {
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

    const pathCreateUrl = import.meta.env.VITE_BACKEND_API_CREATE_URL;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [formData, setFormData] = useState<FormData>({
        user: "",
        email: "",
        password: ""
    });
    const [responseMessage, setResponseMessage] = useState<string>("");
    const loginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(pathCreateUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                setResponseMessage("Success: " + data.message);
            } else {
                setResponseMessage("Error: " + response.statusText);
            }
        } catch (error) {
            setResponseMessage("Error: " + error);
        }
    };

    return (
        <>
            <main
                className="bg-secondary-subtle d-flex justify-content-center align-items-center"
                style={{ height: "100dvh" }}
            >
                <article className="bg-success text-white rounded-start d-flex justify-content-center align-items-center flex-column px-5 form-article">
                    <h1>Bem vindo!</h1>
                    <p className="lead">
                        Sua primeira vez? registre-se e de graça!
                    </p>
                    <p className="lead">Ja tem uma conta?</p>
                    <div>
                        <Link
                            to={`login`}
                            className="px-5 btn btn-outline-light rounded-pill"
                        >
                            Login
                        </Link>
                    </div>
                </article>
                <article className="bg-light rounded-end px-5 d-flex justify-content-center align-items-center form-article">
                    <form onSubmit={loginSubmit}>
                        <h1 className="text-success text-center pb-2">
                            Registrar-se
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
                                    value={formData.user}
                                    onChange={handleChange}
                                    className="form-control"
                                    type="text"
                                    name="user"
                                    id="user"
                                    placeholder="Nome..."
                                    maxLength={256}
                                    minLength={3}
                                    required
                                />
                            </div>
                            <div className="input-group py-2">
                                <a href="#email" className="input-group-text">
                                    <i className="bi bi-envelope"></i>
                                </a>
                                <input
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-mail..."
                                    maxLength={256}
                                    required
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
                                    value={formData.password}
                                    onChange={handleChange}
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
                                className="btn btn-success rounded-pill px-5"
                            >
                                <strong>CRIAR</strong>
                            </button>
                            {responseMessage ? (
                                <div
                                    className="alert alert-danger mt-2"
                                    role="alert"
                                >
                                    {responseMessage}
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </form>
                </article>
            </main>
        </>
    );
};
