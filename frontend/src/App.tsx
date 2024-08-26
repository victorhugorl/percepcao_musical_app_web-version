import ImgPrincipal from "./assets/images/banner-principal.png";
import Nav from "./components/Nav";

export default () => {
    return (
        <>
            <Nav />
            <main className="center-objects">
                <article className="article-index">
                    <div>
                        <h1 className="h1-article">
                            Percepção Musical App,{" "}
                            <span className="secondary-span">
                                o melhor app para musicos
                            </span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. A voluptatibus provident, doloremque eaque
                            placeat impedit possimus odio nesciunt saepe dicta
                            aliquid dolores amet aspernatur obcaecati tempora
                            maiores culpa accusamus temporibus.
                        </p>
                    </div>
                    <img src={ImgPrincipal} alt="image here" />
                </article>
            </main>
            <div>
                <h2>Perguntas frequentes</h2>
                <aside>
                    <div className="accordion first">
                        <h3>
                            <a href="#">Por que utilizar o PMAPP?</a>
                        </h3>
                        <div className="text-accordion">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Tempora aperiam aliquam dolores fugiat illum
                            maiores voluptatum repudiandae earum, qui
                            accusantium aliquid nulla nostrum non impedit iusto
                            rerum id! Nemo, repellendus.
                        </div>
                    </div>
                    <div className="accordion">
                        <h3>
                            <a href="#">Preciso pagar para utilizar?</a>
                        </h3>
                        <div className="text-accordion">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Tempora aperiam aliquam dolores fugiat illum
                            maiores voluptatum repudiandae earum, qui
                            accusantium aliquid nulla nostrum non impedit iusto
                            rerum id! Nemo, repellendus.
                        </div>
                    </div>
                    <div className="accordion final">
                        <h3>
                            <a href="#">Sou iniciante eu consigo usar o app?</a>
                        </h3>
                        <div className="text-accordion">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Tempora aperiam aliquam dolores fugiat illum
                            maiores voluptatum repudiandae earum, qui
                            accusantium aliquid nulla nostrum non impedit iusto
                            rerum id! Nemo, repellendus.
                        </div>
                    </div>
                </aside>
            </div>
            <footer>footer</footer>
        </>
    );
};
