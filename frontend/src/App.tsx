import ImgPrincipal from "./assets/images/banner-principal.png";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";

export default () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <>
            <Nav />
            <main className="py-5 container">
                <article className="row align-items-center">
                    <div className="col-xl-5">
                        <h1 className="display-1">
                            Percepção Musical App,{" "}
                            <span className="text-body-secondary">
                                o melhor app para musicos
                            </span>
                        </h1>
                        <p className="lead">
                            Criado por gpt O PMAPP é um aplicativo inovador
                            projetado especialmente para músicos de todos os
                            níveis. Com ele, você pode compor, gravar, e
                            colaborar com outros artistas, tudo em um só lugar.
                        </p>
                    </div>
                    <div className="col-xl-7">
                        <img
                            className="img-fluid"
                            src={ImgPrincipal}
                            alt="image here"
                        />
                    </div>
                </article>
            </main>
            <div className="py-5 container">
                <h2>Perguntas frequentes</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Preciso pagar para usar o PMAPP?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                O <strong>PMAPP</strong> é o aplicativo perfeito
                                para músicos que querem criar, gravar e
                                colaborar sem custos. Totalmente gratuito, ele
                                oferece todas as ferramentas que você precisa
                                para levar sua música ao próximo nível, sem
                                precisar gastar nada. Comece a criar hoje mesmo
                                com o PMAPP!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Posso utilizar o site mesmo sendo um musico
                                inexperiente?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Com o <strong>PMAPP</strong>, qualquer músico
                                pode criar, independentemente do nível de
                                experiência. Seja você um iniciante ou um
                                profissional, o PMAPP oferece ferramentas
                                simples e poderosas para todos os estilos e
                                habilidades. Não importa se você está apenas
                                começando ou já é um veterano, o PMAPP é para
                                todos!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Outra pergunta?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>
                                    This is the third item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 container" id="icon-grid">
                <h2 className="pb-2 border-bottom">O que temos de novo?</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-phone-flip fs-2 me-3"></i>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                                Responsividade
                            </h3>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-speedometer fs-2 me-3"></i>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                                Peformace
                            </h3>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-noise-reduction fs-2 me-3"></i>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                                Novo design
                            </h3>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-building-add fs-2 me-3"></i>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                                Projeto publico
                            </h3>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-tools fs-2 me-3"></i>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                                Novas ferramentas
                            </h3>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-patch-question fs-2 me-3"></i>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                                Suporte
                            </h3>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-bullseye fs-2 me-3"></i>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                                Interação
                            </h3>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading.
                            </p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg
                            className="bi text-body-secondary flex-shrink-0 me-3"
                            width="1.75em"
                            height="1.75em"
                        >
                            <use xlinkActuate="#tools"></use>
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                                Featured title
                            </h3>
                            <p>
                                Paragraph of text beneath the heading to explain
                                the heading.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link
                            to={`/`}
                            className="nav-link px-2 text-body-secondary"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={`/`}
                            className="nav-link px-2 text-body-secondary"
                        >
                            Novidades
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={`/`}
                            className="nav-link px-2 text-body-secondary"
                        >
                            Preços
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={`/`}
                            className="nav-link px-2 text-body-secondary"
                        >
                            FAQs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={`/`}
                            className="nav-link px-2 text-body-secondary"
                        >
                            Sobre
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">
                    © {currentYear} Company, Inc
                </p>
            </footer>
        </>
    );
};
