export default () => {
    return (
        <>
            <div className="mt-2">
                <label htmlFor="emailId" className="form-label lead">
                    Email usuario:
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
                <label htmlFor="password1Id" className="form-label lead">
                    Senha 1:
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
            <div className="mt-2">
                <label htmlFor="password2Id" className="form-label lead">
                    Senha 2:
                </label>
                <input
                    className="form-control"
                    type="password"
                    name="password2"
                    id="password2Id"
                    required
                    minLength={8}
                />
            </div>
        </>
    );
};
