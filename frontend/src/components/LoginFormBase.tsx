export default () => {
    return (
        <>
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
        </>
    );
};
