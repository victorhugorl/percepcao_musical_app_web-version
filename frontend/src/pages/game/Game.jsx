import { useState } from "react";

import Header from "../../components/Header";

export default () => {
    //import { createQuestions } from "./modules/questions";

    // Nome das notas

    // Definindo lugares para trabalhar
    const [textDisplay, setTextDisplay] = useState("Vai começar");
    const textSet = () => {
        setTextDisplay("Começou kk");
        setClocl("00:05:00");
    };

    const [clock, setClocl] = useState("00:00:00");
    const timerChange = () => {
        setTextDisplay("Se prepara ai boi vei");
        setClocl("00:00:00");
    };

    // para não poluir apaguei alguns comentarios o arquivo js ainda esta em assets

    return (
        <>
            <Header />
            <section className="container font-h1-title">
                <div className="p-1">
                    <a
                        href="#"
                        className="fs-4 float-start link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                        data-bs-toggle="modal"
                        data-bs-target="#exitGame"
                    >
                        Sair do jogo
                    </a>
                    <p className="text-end fs-4">0/12</p>
                </div>
                <div
                    className="modal fade"
                    id="exitGame"
                    tabIndex="-1"
                    aria-labelledby="confirmExit"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-center">
                                <h1>Voltar para o menu principal?</h1>
                            </div>
                            <div className="modal-footer d-flex justify-content-around">
                                <a
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    href="/main"
                                >
                                    SIM
                                </a>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    NÃO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-a">
                    <div>
                        <h3 className="text-center fs-1 p-5 text-display">
                            {textDisplay}
                        </h3>
                    </div>
                    <div className="bg-primary-black p-2">
                        <div className="d-flex justify-content-around p-4 buttons-div">
                            <span className="btn btn-light px-5 btn-lg">C</span>
                            <span className="btn btn-light px-5 btn-lg">A</span>
                            <span className="btn btn-success active px-5 btn-lg">
                                B
                            </span>
                            <span className="btn btn-light px-5 btn-lg">E</span>
                        </div>
                        <div className="d-flex justify-content-between p-4">
                            <span
                                className="btn btn-light px-5 btn-lg"
                                onClick={timerChange}
                            >
                                repetir
                            </span>
                            <span className="btn btn-outline-light disabled px-5 btn-lg">
                                {clock}
                            </span>
                            {/* TESTE AQUI PARA MUDAR TEXTO */}
                            <span
                                className="btn btn-light px-5 btn-lg continue-skip"
                                onClick={textSet}
                            >
                                continuar
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <audio id="my-audio">
                <source src="" type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
        </>
    );
};
