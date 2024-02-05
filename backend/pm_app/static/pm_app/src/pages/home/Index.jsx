// Importação de imagens
import ImgAboutSite from "@s:pm_app/imgs/img-site-principal.jpeg";
import ImgAboutSite2 from "@s:pm_app/imgs/img-principal-app.jpeg";
import Tiles from "@s:pm_app/imgs/tiles.jpeg";
import ImgFinalSite from "@s:pm_app/imgs/complet-img.png";

export default () => {
    return (
        <>
            <header className="bg-primary-black">
                <h1 className="display-1 text-center text-light p-2">
                    Percepção Musical App
                </h1>
            </header>

            <section className="container pt-5">
                <div className="pb-3">
                    <h2 className="display-3">
                        Desenvolva sua percepção musical
                    </h2>
                </div>
                <div className="row">
                    <img
                        className="col-md-6 img-fluid"
                        src={ImgAboutSite}
                        alt="img-site1"
                    />
                    <img
                        className="col-md-6 img-fluid"
                        src={ImgAboutSite2}
                        alt="img-site2"
                    />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto pt-4">
                    <a href="/login" className="btn btn-danger btn-lg mb-5">
                        CADASTRE-SE AGORA
                    </a>
                </div>
            </section>

            <section className="mt-5 text-light bg-img">
                <div className="container">
                    <h2 className="display-3">Transforme sua vida</h2>
                    <p className="lead">atraves da musica</p>
                    <div>
                        <p className="lh-sm fs-1">
                            Bem-vindo ao Percepção Musical App, onde a música
                            ganha vida através dos seus ouvidos! Prepare-se para
                            mergulhar em um mundo de treinamentos exclusivos e
                            desafios envolventes, projetados para aprimorar sua
                            percepção musical de maneira divertida e
                            interativa...
                        </p>
                    </div>
                </div>
            </section>

            <section className="container">
                <h1 className="display-1 pb-4 pt-4">
                    Descubra novos horizontes Musicais
                </h1>
                <div className="row d-flex align-items-center">
                    <p className="col-md-7 fs-2">
                        Explore uma variedade de exercícios projetados para
                        todos os níveis, desde iniciantes até músicos
                        experientes. Desenvolva sua capacidade de reconhecer
                        intervalos, identificar acordes, compreender progressões
                        e muito mais. Esteja pronto para dominar habilidades
                        essenciais que vão elevar sua compreensão musical a
                        novos patamares.
                    </p>
                    <img className="col-md-4 img-fluid" src={Tiles} />
                </div>
            </section>

            <section className="mt-5 text-light bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="display-3">
                                Personalize sua experiencia
                            </h2>
                            <div>
                                <p className="lh-sm fs-5">
                                    Nosso aplicativo se adapta a você. Escolha
                                    entre diferentes modalidades de treino,
                                    personalize seu ritmo e nível de
                                    dificuldade, e desfrute de uma jornada
                                    personalizada para alcançar seus objetivos
                                    musicais. Aventura-se no mundo da música de
                                    forma divertida e flexível.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="display-3">
                                Aprenda de forma divertida
                            </h2>
                            <div>
                                <p className="lh-sm fs-5">
                                    Jogos interativos que tornam o aprendizado
                                    uma experiência envolvente. Desperte sua
                                    paixão pela música enquanto desbloqueia
                                    novas conquistas e níveis. Prepare-se para
                                    sentir o ritmo, entender as melodias e
                                    descobrir os segredos da música.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container pt-5">
                <div className="row d-flex align-items-center text-center">
                    <div className="col-md-6">
                        <img className="img-fluid" src={ImgFinalSite} />
                    </div>
                    <div className="col-md-4">
                        <h2 className="display-2">O que está esperando?</h2>
                        <h3 className="display-4">
                            Faça seu cadastro ou login <strong>agora!</strong>
                        </h3>
                        <a
                            className="btn btn-primary btn-lg mt-3"
                            href="/login"
                        >
                            Eu quero usar o Percepção Musical!
                        </a>
                    </div>
                </div>
            </section>

            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">
                        © 2024 Company, Inc
                    </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a
                            className="text-body-secondary"
                            href="https://github.com/victorhugorl/percepcao_musical_app_web-version"
                        >
                            Git hub
                        </a>
                    </li>
                    <li className="ms-3">
                        <a
                            className="text-body-secondary"
                            href="https://www.linkedin.com/in/daniel-tenório-6471b0244/"
                        >
                            FrontEnd Linkedin
                        </a>
                    </li>
                    <li className="ms-3">
                        <a
                            className="text-body-secondary"
                            href="https://www.linkedin.com/in/victor-hugo-rangel-lima-4a8449289/"
                        >
                            BackEnd Linkedin
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
};
