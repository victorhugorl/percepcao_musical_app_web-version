import { useState } from "react";
//components
import Header from "../../components/Header";
// js puro
import "../../assets/js/questions";
import { playerNote } from "../../assets/js/notesPlayer";

export default () => {
    // Texto para iniciar o app
    const [textDisplay, setTextDisplay] = useState("Vamos começar?");

    // valida o botão para iniciar o jogo
    const [clicked, setClicked] = useState(true);

    // numero de notas do jogo 0/12
    const [numbersOfNotes, setNumbersOfNotes] = useState(0);

    // tempo e funcção que seta o tempo
    const [clock, setClock] = useState(0);

    // parte da frase pular ou continuar
    const [continueOrJump, setContinueOrJump] = useState("continuar");

    // Faz o cronometro andar de 0 ao infinito
    const startTime = () => {
        setInterval(() => {
            setClock((oldClock) => oldClock + 1);
        }, 1000);
    };

    // Função init inicia e retorna o app
    const initTimer = () => {
        setTextDisplay("Começando... Escute a nota e aperta na correta");
        setClicked(false);
        setContinueOrJump("pular");
        // ele coleta o continuar e ativa ele
        let classForActive = document.querySelector("#continue-skip");
        classForActive.classList.remove("disabled");
        let classForActiveRepeat = document.querySelector("#repeater");
        classForActiveRepeat.classList.remove("disabled");
        // Apenas texto por enquanto aqui vai fiz a função do tempo
        startTime();
    };

    const continueNotes = () => {
        removeDisabledNotes(false);
        setContinueOrJump("pular");
        // apenas texto por enquanto
        if (numbersOfNotes < 12) {
            setNumbersOfNotes((oldValue) => oldValue + 1);
        } else {
            let classForActive = document.querySelector("#continue-skip");
            classForActive.classList.add("disabled");
            console.log("Teste finalizado");
        }
        setTextDisplay("Proximo teste");
    };

    const removeDisabledNotes = (disable = true) => {
        // vou ajeitar essa porqueira jaja
        // vou fazer um for com document.querySelectorAll('#note')
        if (disable) {
            let listClassForActiveNote = document.querySelectorAll("#note");
            listClassForActiveNote.forEach((note) => {
                note.classList.add("disabled");
            });
        } else {
            let listClassForActiveNote = document.querySelectorAll("#note");
            listClassForActiveNote.forEach((note) => {
                note.classList.remove("disabled");
            });
        }
    };

    // Colhe a nota que o usuario escolheu
    const choosedNote = (note) => {
        // vou ajeitar essa porqueira jaja
        removeDisabledNotes();
        setContinueOrJump("continuar");
        console.log(note);
        playerNote(note);
    };

    // Numero de repetições possiveis
    const [repeates, setRepeates] = useState(0);

    // função que repete as notas musicais
    const repeatSound = (repeted) => {
        setRepeates((oldValue) => oldValue + repeted);
        if (repeates < repeted) {
            console.log("vezes repetida" + repeates);
        } else {
            let classForActiveRepeat = document.querySelector("#repeater");
            classForActiveRepeat.classList.add("disabled");
        }
    };

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
                    <p className="text-end fs-4">{numbersOfNotes}/12</p>
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
                    <div className="bg-primary-black p-2 rounded">
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
                                <span
                                    className="btn btn-light px-5 btn-lg"
                                    id="note"
                                    onClick={() => choosedNote("C")}
                                >
                                    C
                                </span>
                                <span
                                    className="btn btn-light px-5 btn-lg"
                                    id="note"
                                    onClick={() => choosedNote("A")}
                                >
                                    A
                                </span>
                                <span
                                    className="btn btn-light px-5 btn-lg"
                                    id="note"
                                    onClick={() => choosedNote("B")}
                                >
                                    B
                                </span>
                                <span
                                    className="btn btn-light px-5 btn-lg"
                                    id="note"
                                    onClick={() => choosedNote("E")}
                                >
                                    E
                                </span>
                            </div>
                        )}

                        <div className="d-flex justify-content-between p-4">
                            <span
                                className="btn btn-light px-5 btn-lg disabled"
                                id="repeater"
                                onClick={() => repeatSound(1)}
                            >
                                repetir
                            </span>
                            <span className="btn btn-outline-light disabled px-5 btn-lg">
                                {clock}
                            </span>
                            <span
                                className="btn btn-light px-5 btn-lg disabled"
                                id="continue-skip"
                                onClick={continueNotes}
                            >
                                {continueOrJump}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
