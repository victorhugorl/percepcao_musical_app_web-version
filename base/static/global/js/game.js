class Timer {
    constructor(clock) {
        this.clock = clock;
        this.timer = null;
        this.seconds = 0;
        this.createHourFromSeconds(this.seconds);
    }

    createHourFromSeconds = function (seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        });
    };

    runClock = () => {
        this.timer = setInterval(() => {
            this.seconds++;
            this.clock.innerHTML = this.createHourFromSeconds(this.seconds);
        }, 1000);
    };

    start = () => {
        this.clock.classList.remove("paused");
        clearInterval(this.timer);
        this.runClock();
    };

    pause = () => {
        clearInterval(this.timer);
        this.clock.classList.add("paused");
    };

    reset = () => {
        clearInterval(this.timer);
        this.clock.innerHTML = "00:00:00";
        this.clock.classList.remove("paused");
        this.seconds = 0;
    };
}

class App {
    constructor() {
        // Nome das notas
        this.data = document.currentScript.dataset;
        let questions = this.data.questions;
        this.questions = JSON.parse(questions);

        this.currentQuestionIndex = 0;
        this.score = 0;
        this.roundIndicator = document.querySelector("p.round-indicator");

        // Definindo lugares para trabalhar
        this.popup = new bootstrap.Modal(document.getElementById("confirm"));
        // popup final
        this.popupConcluded = new bootstrap.Modal(
            document.getElementById("concluded")
        );
        this.confirmBtn = document.querySelector(".confirm");

        this.textDisplay = document.querySelector(".text-display");

        this.clock = document.querySelector(".clock");
        this.cron = new Timer(this.clock);

        // acertos e time
        this.corrects = 0;

        // lista de buttões
        this.divButtons = document.querySelector("div.buttons-div");

        this.repeatButton = document.querySelector("span.repeat");
        this.continueOrSkip = document.querySelector("span.continue-skip");
    }

    startApp = () => {
        this.showPopup(); // mostra popup de confirmação
        this.confirmBtn.onclick = () => {
            //função que fecha o popup
            this.popup.hide();
            this.startRound(); // inicia uma rodada do jogo
            this.cron.start(); // inicia o cronometro assim que ele diz que está pronto
            this.buttonSkip();
        };
    };

    showPopup = () => {
        window.onload = () => {
            this.popup.show();
        };
    };

    startRound = () => {
        this.textDisplay.innerHTML = "Qual é a nota tocada ?";
        this.continueOrSkip.innerHTML = "Pular";
        this.clicked = false;
        this.loadQuestions();
        this.playNote();

        this.repeat();
    };

    loadQuestions = () => {
        this.updateRoundIndicator(this.questions);

        if (this.currentQuestionIndex < this.questions.length) {
            const currentQuestion = this.questions[this.currentQuestionIndex];

            Array.from(this.divButtons.children).forEach((element, indic) => {
                console.log(element, indic);
                element.innerHTML = currentQuestion[indic]["name"];

                // testando essa
                if (currentQuestion[indic]["correct"]) {
                    this.correctNote = currentQuestion[indic]["name"];
                    this.note = document.getElementById(this.correctNote);
                } else {
                    this.checkAnswer(element);
                }
            });
            // pq esse === True e não usar um if else
            // if (currentQuestion[index]["correct"] === true) {
            //     this.correctNote = currentQuestion[index]["name"];
            //     console.log(this.correctNote);
            //     this.note = document.getElementById(this.correctNote);
            // }
            // if (this.clicked === false) {
            //     this.checkAnswer(element);
            // }
        }
    };

    updateRoundIndicator = (questions) => {
        this.roundIndicator.innerHTML = `${this.currentQuestionIndex + 1}/${
            questions.length
        }`;
    };

    checkAnswer = (button) => {
        button.addEventListener("click", (event) => {
            let selectedOption = button.innerHTML.trim();

            // console.log(selectedOption);
            // console.log(this.correctNote);

            if (selectedOption == this.correctNote && this.clicked === false) {
                this.textDisplay.innerHTML = "Nota correta!";
                this.corrects++;
                // feedback sonoro
                try {
                    button.classList.remove("btn-light");
                } catch (error) {
                    console.log(error);
                }

                button.classList.add("btn-success", "active");
            }
            if (this.clicked === false && this.correctNote == !selectedOption) {
                this.textDisplay.innerHTML = "Nota errada!";
                // feedback sonoro
                try {
                    button.classList.remove("btn-light");
                } catch (error) {
                    console.log(error);
                }

                button.classList.add("btn-danger", "active");
            }
            this.clicked = true;
            this.continue();
        });
    };

    continue = () => {
        this.continueOrSkip.innerHTML = "Continuar";
        if (this.currentQuestionIndex >= this.questions.length - 1) {
            this.continueOrSkip.innerHTML = "finalizar";
            Array.from(this.divButtons.children).forEach((element) => {
                element.classList.add("disabled");
            });
            this.repeatButton.classList.add("disabled");
            this.continueOrSkip.classList.add("disabled");
            this.cron.pause();

            const timeInput = document.querySelector("input#timeSave");
            const correctInput = document.querySelector("input#acertoSave");
            correctInput.value = this.corrects;
            timeInput.value = this.clock.innerText;
            this.popupConcluded.show();
        }
    };

    buttonSkip = () => {
        this.continueOrSkip.addEventListener("click", (e) => {
            if (this.currentQuestionIndex < this.questions.length - 1)
                this.currentQuestionIndex += 1;
            console.log(this.currentQuestionIndex);

            if (this.clicked === true) {
                for (let i = 0; i < this.divButtons.children.length; i++) {
                    const button = this.divButtons.children[i];
                    button.classList.remove(
                        "btn-danger",
                        "active",
                        "btn-success"
                    );
                    button.classList.add("btn-light");
                }
            }

            this.startRound();
        });
    };
    playNote = () => {
        this.note.currentTime = 0;
        this.note.play();
    };
    repeat = () => {
        this.repeatButton.addEventListener("click", (event) => {
            this.note.currentTime = 0;
            this.note.play();
        });
    };
}

myApp = new App();

myApp.startApp();
