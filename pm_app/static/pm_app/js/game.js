//import { createQuestions } from "./modules/questions";


// Nome das notas

// Definindo lugares para trabalhar
const clock = document.querySelector(".clock");
const textDisplay = document.querySelector(".text-display");
const continueOrSkip = document.querySelector(".continue-skip");
const divButtons = document.querySelector(".buttons-div");

textDisplay.innerHTML = "Qual é a nota tocada ?";

console.log(divButtons);

// Audio

audio = document.getElementById("my-audio");
console.log(audio);
audio.currentTime = 0;
audio.play();

// Iniciando cronometro
cron = new Timer(clock);
cron.runClock();

console.log(continueOrSkip);
continueOrSkip.addEventListener("click", (event) => {
    audio.play();
});

console.log(" está vindo para cá ?");

let note_list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "A#",
    "C#",
    "D#",
    "F#",
    "G#"
];

console.log(createQuestions(note_list, 4));
console.log("Funciona essa mizera omi");
