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
        </>
    );
};
