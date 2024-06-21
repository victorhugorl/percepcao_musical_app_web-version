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

    constructor (){
            // Nome das notas
        this.data = document.currentScript.dataset;
        this.questions = this.data.questions;
            
        // Definindo lugares para trabalhar
        this.modal = new bootstrap.Modal(document.getElementById('confirm'));
        this.confirmBtn = document.querySelector(".confirm");
        this.clock = document.querySelector(".clock");
        this.textDisplay = document.querySelector(".text-display");
        this.continueOrSkip = document.querySelector(".continue-skip");
        this.divButtons = document.querySelector(".buttons-div");
        this.repeatButton = document.querySelector('.repeat')
        this.cron = new Timer(this.clock);

    }

    startApp = () => {
        
        this.showPopup() // mostra popup de confirmação
        this.confirmBtn.onclick = () => { //função que fecha o popup 
            this.modal.hide() 
            this.startRound() // inicia uma rodada do jogo

        }
        
    }

    showPopup = () => {
        window.onload = function () {
            this.modal.show()
         
        };        
    }

    startRound = () => {
        this.textDisplay.innerHTML = "Qual é a nota tocada ?";
        this.continueOrSkip.innerHTML = 'Pular'
        

    }

}







  


// Audio




//repeatButton.addEventListener("click", (event) =>{
  //  audio.currentTime = 0;
    //audio.play();
//})


// for(let  i = 0; i < divButtons.children.length; i++){

//    console.log(divButtons.children[i].tagName)
//    if(divButtons.children[i].tagName == "SPAN") {
//        let button = divButtons.children[i]
        
//        button.addEventListener('click', (event) => {
 //           console.log('estou clicando no botao ')
 //           console.log(button.innerHTML)
 //           let selectedOption = button.innerHTML.trim();
 //           console.log(button);
 //           checkAnswer(selectedOption, button );
 //       })
        
 //   }

//}

myApp = new App()

myApp.startApp()