import React, { useState, useRef, useEffect } from "react";

import Header from "../../components/Header";

export default () => {
    const [textDisplay, setTextDisplay] = useState("Vamos começar?");

    const [clicked, setClicked] = useState(true);

    const Ref = useRef(null);

    // The state for our timer
    const [clock, setClock] = useState("00:00:00");

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
        return {
            total,
            hours,
            minutes,
            seconds
        };
    };

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the begining of the variable
            setClock(
                (hours > 9 ? hours : "0" + hours) +
                    ":" +
                    (minutes > 9 ? minutes : "0" + minutes) +
                    ":" +
                    (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        setClock("00:00:60");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    };

    const initTimer = () => {
        setTextDisplay("Começando...");
        setClicked(false);

        // Apenas texto por enquanto
        // vou ajeitar o design também
        setClock("00:00:60");
    };

    const resetTimer = () => {};

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
                        {clicked ? (
                            <div className="d-flex justify-content-center p-2">
                                <button
                                    className="btn btn-light btn-lg px-5"
                                    onClick={initTimer}
                                >
                                    SIM!
                                </button>
                            </div>
                        ) : (
                            <div className="d-flex justify-content-around p-4 buttons-div">
                                <span className="btn btn-light px-5 btn-lg">
                                    C
                                </span>
                                <span className="btn btn-light px-5 btn-lg">
                                    A
                                </span>
                                <span className="btn btn-success active px-5 btn-lg">
                                    B
                                </span>
                                <span className="btn btn-light px-5 btn-lg">
                                    E
                                </span>
                            </div>
                        )}

                        <div className="d-flex justify-content-between p-4">
                            <span
                                className="btn btn-light px-5 btn-lg"
                                onClick={resetTimer}
                            >
                                repetir
                            </span>
                            <span className="btn btn-outline-light disabled px-5 btn-lg">
                                {clock}
                            </span>
                            <span className="btn btn-light px-5 btn-lg continue-skip">
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
