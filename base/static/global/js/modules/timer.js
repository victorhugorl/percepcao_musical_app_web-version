module.exports = {
    seconds:0,
    timer: null,
    clock: document.querySelector('.clock'),


    createHourFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    },

    runClock() {
        timer = setInterval(function() {
            seconds++;
            clock.innerHTML = createHourFromSeconds(seconds);
        }, 1000)
    },

    start(){
        clock.classList.remove('paused')
        clearInterval(timer)
        iniciaRelogio();
    },


    pause (){
        clearInterval(timer);
        clock.classList.add('paused');
    },

    reset (){
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        clock.classList.remove('paused');
        seconds = 0;
    },   
}
