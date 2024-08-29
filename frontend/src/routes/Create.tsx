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
            <main className="">
                <form action={form_control}>
                    <h1>{title}</h1>
                    <div>
                        <label htmlFor="name">Nome usuario:</label>
                        <input type="text" name="name" id="nameId" />
                    </div>
                    <div>
                        <label htmlFor="name">Email usuario:</label>
                        <input type="text" name="name" id="nameId" />
                    </div>
                    <div>
                        <label htmlFor="name">Senha 1:</label>
                        <input type="text" name="name" id="nameId" />
                    </div>
                    <div>
                        <label htmlFor="name">Senha 2:</label>
                        <input type="text" name="name" id="nameId" />
                    </div>
                    <div>
                        <button type="submit">{nameBtn}</button>
                    </div>
                    {loginYu ? "Login" : "Cadastro"}
                </form>
            </main>
        </>
    );
};
