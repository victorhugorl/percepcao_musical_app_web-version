import Create from "../components/CreateFormBase";
import Login from "../components/LoginFormBase";

export default ({
    title,
    form_control,
    nameBtn,
    loginYu
}: {
    title: string;
    form_control: string;
    nameBtn: string;
    loginYu: boolean;
}) => {
    return (
        <>
            <main className="d-flex justify-content-center align-items-center h-100 bg-secondary text-light">
                <form action={form_control}>
                    <h1 className="display-5">{title}</h1>
                    <div>
                        <label htmlFor="nameId" className="form-label lead">
                            Nome usuario:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="nameId"
                            required
                            minLength={5}
                            maxLength={40}
                        />
                    </div>
                    {loginYu ? <Login /> : <Create />}
                    <div className="mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary form-control"
                        >
                            {nameBtn}
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
};
