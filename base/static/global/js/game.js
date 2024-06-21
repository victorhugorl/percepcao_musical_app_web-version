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

// Nome das notas
data = document.currentScript.dataset;
questions = data.questions;

// Definindo lugares para trabalhar
const modal = new bootstrap.Modal(document.getElementById('confirm'));
const confirmBtn = document.querySelector(".confirm");

const clock = document.querySelector(".clock");
const textDisplay = document.querySelector(".text-display");
const continueOrSkip = document.querySelector(".continue-skip");
const divButtons = document.querySelector(".buttons-div");


window.onload = function () {
    modal.show()
 
};

confirmBtn.onclick = function () {
   modal.hide()
   audio.play()
   cron.runClock();


    // executar o que eu quizer
};

textDisplay.innerHTML = "Qual é a nota tocada ?";

// Audio

audio = document.getElementById("my-audio");
audio.currentTime = 0;

// Iniciando cronometro
cron = new Timer(clock);


continueOrSkip.addEventListener("click", (event) => {
    audio.play();
});
