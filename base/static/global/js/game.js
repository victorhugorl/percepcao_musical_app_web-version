class Timer {
    constructor(clock) {
        this.clock = clock;
        this.timer = null;
        this.seconds = 0;
        this.createHourFromSeconds(this.seconds);
    }

    createHourFromSeconds = function (seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    runClock = () => {
        this.timer = setInterval(() => {
            this.seconds++;
            this.clock.innerHTML = this.createHourFromSeconds(this.seconds);
        }, 1000);
    }

    start = () => {
        this.clock.classList.remove('paused');
        clearInterval(this.timer);
        this.runClock();
    }

    pause = () => {
        clearInterval(this.timer);
        this.clock.classList.add('paused');
    }

    reset = () => {
        clearInterval(this.timer);
        this.clock.innerHTML = '00:00:00';
        this.clock.classList.remove('paused');
        this.seconds = 0;
    };
}

// Definindo lugares para trabalhar
const clock = document.querySelector('.clock');
const textDisplay = document.querySelector('.text-display');
const continueOrSkip = document.querySelector('.continue-skip');



textDisplay.innerHTML = 'Qual é a nota tocada ?'

// Audio

audio = document.getElementById('my-audio');
console.log(audio)
audio.currentTime = 0;
audio.play();

// Iniciando cronometro
cron = new Timer(clock);
cron.runClock();

console.log(continueOrSkip)
continueOrSkip.addEventListener('click' , event => {
    audio.play()
})


console.log(' está vindo para cá ?');


const tempo = new Timer("relogio");
console.log("Relogio esta on");
