export default () => {
    let bodyBlues = (document.body.style.backgroundColor = "rgb(25, 53, 92)");
    // Vo ajeitar isso aqui depois

    function loginValidation() {
        let email_adress = document.querySelector("input#emailInput");
        let password = document.querySelector("input#passwordInput");
        if (email_adress.value.length == "" || password.value.length == "") {
            email_adress.classList.add("border-danger");
            password.classList.add("border-danger");
            alert("digite valores validos");
        } else if (password.value.length < 8) {
            alert("Por favor digite uma senha com 8 ou mais caracteres");
        } else {
            email_adress.classList.add("border-success"); // Aqui os valores ja podem ser salvos em um banco de dados
            password.classList.add("border-success");
            window.location.assign("/main"); // se houver tela de loaging arquivos estarão carregados
        }
    }

    function showPassword() {
        let password_text = document.querySelector("input#passwordInput");
        if (password_text.type === "password") {
            password_text.setAttribute("type", "text");
        } else {
            password_text.setAttribute("type", "password");
        }
    }

    return (
        <>
            <header className="bg-light">
                <div className="container">
                    <h1 className="display-2 pb-3 text-center">
                        Percepção Musical App
                    </h1>
                </div>
            </header>
            <section className="container-form">
                <div className="py-3">
                    <h1 className="fw-bold fs-2">Login ou cadastre-se</h1>
                </div>
                <div>
                    <form>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control rounded-3"
                                id="emailInput"
                                placeholder="name@example.com"
                                required
                            />
                            <label htmlFor="emailInput">Seu Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control rounded-3"
                                id="passwordInput"
                                placeholder="Password"
                                required
                            />
                            <label htmlFor="passwordInput">Senha</label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkPassword"
                                onClick={showPassword}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkPassword"
                            >
                                Mostrar senha
                            </label>
                        </div>
                        <a
                            className="w-100 mb-2 btn btn-outline-primary btn-lg rounded-3"
                            onClick={loginValidation}
                        >
                            Entrar ou Cadastrar
                        </a>
                        <small className="text-body-secondary">
                            Clicando em Entrar você aceita os termos e serviços
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#saibaMaisModal"
                            >
                                saiba mais
                            </a>
                            .
                        </small>
                    </form>
                </div>
            </section>
            <section>
                <div
                    className="modal fade"
                    id="saibaMaisModal"
                    tabIndex="-1"
                    aria-labelledby="modalTile"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modalTile">
                                    Termos e serviços
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <h4>
                                    <strong>Termos de Serviço</strong>
                                </h4>
                                <p>
                                    Bem-vindo aos nossos serviços. Ao utilizar
                                    nossos produtos ou serviços, você concorda
                                    com os seguintes termos.
                                    <strong>Leia com atenção</strong>.
                                </p>
                                <p>
                                    <strong>Uso dos Serviços:</strong> Você
                                    concorda em utilizar nossos serviços apenas
                                    para os fins permitidos e de acordo com a
                                    legislação aplicável e os termos
                                    estabelecidos.
                                </p>
                                <p>
                                    <strong>Privacidade:</strong> Respeitamos
                                    sua privacidade. Nossa Política de
                                    Privacidade explica como tratamos seus dados
                                    pessoais e protegemos sua privacidade ao
                                    utilizar nossos serviços. Ao utilizar nossos
                                    serviços, você concorda com a coleta, uso e
                                    compartilhamento de suas informações
                                    conforme descrito em nossa Política de
                                    Privacidade.
                                </p>
                                <p>
                                    <strong>Conteúdo:</strong> Ao utilizar
                                    nossos serviços, você pode ser exposto a
                                    conteúdos. Entretanto, você concorda em não
                                    reproduzir, duplicar, copiar, vender,
                                    trocar, revender ou explorar qualquer parte
                                    dos nossos serviços sem a nossa autorização
                                    expressa.
                                </p>
                                <p>
                                    <strong>Modificações:</strong> Reservamo-nos
                                    o direito de modificar ou encerrar nossos
                                    serviços a qualquer momento, sem aviso
                                    prévio. Você concorda que não seremos
                                    responsáveis perante você ou terceiros por
                                    qualquer modificação, suspensão ou
                                    encerramento dos nossos serviços.
                                </p>
                                <p>
                                    <strong>Disposições Gerais:</strong> Estes
                                    termos de serviço serão regidos e
                                    interpretados de acordo com as leis. Se
                                    qualquer disposição destes termos for
                                    considerada inválida ou inexequível, tal
                                    disposição será eliminada e as demais
                                    disposições serão aplicadas.
                                </p>
                                Ao utilizar nossos serviços, você concorda e
                                aceita estes termos. Se tiver alguma dúvida
                                sobre nossos termos de serviço, entre em contato
                                conosco
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
