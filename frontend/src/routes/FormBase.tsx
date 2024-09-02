export default () => {
    return (
        <>
            <main className="d-flex justify-content-center align-items-center h-100 bg-secondary text-light">
                <form action="#">
                    <h1 className="display-5">Cadastrar-se</h1>
                    <div className="mt-2">
                        <label htmlFor="emailId" className="form-label lead">
                            Digite nome:
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="emailId"
                            required
                            minLength={5}
                            maxLength={256}
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="emailId" className="form-label lead">
                            Digite seu E-mail:
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="emailId"
                            required
                            minLength={5}
                            maxLength={256}
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="password1Id"
                            className="form-label lead"
                        >
                            Senha:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password1"
                            id="password1Id"
                            required
                            minLength={8}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="passwordId" className="form-label lead">
                            Senha:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            id="passwordId"
                            required
                            minLength={8}
                        />
                    </div>
                    <div className="mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary form-control"
                        >
                            Criar usuario
                        </button>
                    </div>
                </form>
                <form action="">
                    <h1 className="display-5">Fazer login</h1>
                    <div className="mt-2">
                        <label htmlFor="emailId" className="form-label lead">
                            Digite seu E-mail:
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="emailId"
                            required
                            minLength={5}
                            maxLength={256}
                        />
                    </div>
                    <div className="mt-2">
                        <label
                            htmlFor="password1Id"
                            className="form-label lead"
                        >
                            Senha:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password1"
                            id="password1Id"
                            required
                            minLength={8}
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="passwordId" className="form-label lead">
                            Senha:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            id="passwordId"
                            required
                            minLength={8}
                        />
                    </div>
                    <div className="mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary form-control"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
};
