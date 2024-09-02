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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. A voluptatibus provident, doloremque eaque
                            placeat impedit possimus odio nesciunt saepe dicta
                            aliquid dolores amet aspernatur obcaecati tempora
                            maiores culpa accusamus temporibus.
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
                                <strong>
                                    This is the first item's accordion body.
                                </strong>{" "}
                                It is shown by default, until the collapse
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
                                <strong>
                                    This is the second item's accordion body.
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
                                Accordion Item #3
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
            <footer className="pt-5 container">
                <div className="container">
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-2 border-top">
                        <div className="col mb-3">
                            <a
                                href="/"
                                className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                            >
                                <i className="bi bi-controller fs-2"></i>
                            </a>
                            <p className="text-body-secondary">
                                © {currentYear}
                            </p>
                        </div>
                        <div className="col mb-3">
                            <h5>Home</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <Link
                                        to={`/`}
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#icon-grid"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Novidades
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#accordionExample"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Perguntas
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a
                                        href="#"
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </>
    );
};
