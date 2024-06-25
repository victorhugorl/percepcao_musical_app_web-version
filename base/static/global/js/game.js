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
        let questions = this.data.questions;
        this.questions = JSON.parse(questions)

        this.currentQuestionIndex = 0;
        this.score = 0;
        this.roundIndicator = document.querySelector('.roud-indicator');
            
        // Definindo lugares para trabalhar
        this.popup = new bootstrap.Modal(document.getElementById('confirm'));
        this.confirmBtn = document.querySelector(".confirm");

        this.textDisplay = document.querySelector(".text-display");
       
        this.clock = document.querySelector(".clock");
        this.cron = new Timer(this.clock);

        this.divButtons = document.querySelector(".buttons-div");
        
        this.repeatButton = document.querySelector('.repeat');
        this.continueOrSkip = document.querySelector(".continue-skip");
        
    }

    startApp = () => {
       
        this.startRound(); // inicia uma rodada do jogo


        this.showPopup(); // mostra popup de confirmação
        this.confirmBtn.onclick = () => { //função que fecha o popup 
            this.popup.hide(); 
            this.cron.start(); // inicia o cronometro assim que ele diz que está pronto
            this.buttonSkip()
        };
        
    }

    showPopup = () => {
        window.onload = () => {
            this.popup.show()
         
        };        
    }

    startRound = () => {
        this.textDisplay.innerHTML = "Qual é a nota tocada ?";
        this.continueOrSkip.innerHTML = 'Pular';
        this.clicked = false;
        this.loadQuestions();
        this.repeat();
        

        

    }

    loadQuestions = () => {
        ;
        this.updateRoundIndicator(this.questions);

       
        if (this.currentQuestionIndex < this.questions.length) {
            const currentQuestion = this.questions[this.currentQuestionIndex];
            
            for(let i = 0; i< this.divButtons.children.length; i++) {
                const button  = this.divButtons.children[i]
                button.innerHTML = currentQuestion[i]['name']
                
                this.correctNote = false;

                if (currentQuestion[i]['correct'] === true ){
                    this.correctNote = currentQuestion[i]['name']
                };

                if(this.clicked === false){
                this.checkAnswer(button)
                };
            };

        }
       
    };

    updateRoundIndicator = (questions) => {
        this.roundIndicator.innerHTML = `${this.currentQuestionIndex + 1}/${questions.length}`
    }

    checkAnswer = (button) => {     


        button.addEventListener('click', (event) => {
            let selectedOption = button.innerHTML.trim();
                
            
            if (selectedOption === this.correctNote && this.clicked === false){
                this.textDisplay.innerHTML = 'Nota correta!'
                    // feedback sonoro
                try{
                    button.classList.remove('btn-light')
                }catch (error){
                    console.log(error)
                }finally {
                    button.classList.add('btn-success', 'active')
                }
            }if( this.clicked === false && this.correctNote ==! selectedOption) {
                this.textDisplay.innerHTML = 'Nota errada!'
                    // feedback sonoro
                try{
                    button.classList.remove('btn-light')
                }catch (error){
                    console.log(error)
                }finally {
                    button.classList.add('btn-danger', 'active')
                }
            }else {
                // toca o som da nota apertada
            }
            this.clicked = true
            this.continue()
        })  
    }

    continue = () => {
            this.continueOrSkip.innerHTML = 'Continuar'
    }

    buttonSkip = () => {
        this.continueOrSkip.addEventListener('click', e =>{
            
            if (this.currentQuestionIndex < this.questions.length ) this.currentQuestionIndex +=1  ;
            console.log(this.currentQuestionIndex)

            console.log(this.questions.length)
            if (this.clicked === true ) {
                for(let i = 0; i< this.divButtons.children.length; i++) {
                    const button  = this.divButtons.children[i]
                    button.classList.remove('btn-danger', 'active', 'btn-success');
                    button.classList.add('btn-light')
                };    
            }
            if (this.currentQuestionIndex >= this.questions.length -1){
                this.continueOrSkip.innerHTML = 'finalizar'
            }
            this.startRound();

        })
    }
    repeat= () => { 
        this.repeatButton.addEventListener("click", (event) =>{
        // audio.currentTime = 0;
        // audio.play();
      })
    }

}


//


myApp = new App()

myApp.startApp()