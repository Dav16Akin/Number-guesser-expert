let Controller = (function () {
    let input = document.querySelector('.input-space');
    let submitBtn = document.querySelector('.submit-btn');
    let output = document.querySelector('.input-check');
    let restart = document.querySelector('#restart')

    let min, max, tries;
    min = 1
    max = 10
    tries = 2
    let random = Math.floor(Math.random() * (min*max)) + min

    restart.style.display = 'none'

    return {
        input,submitBtn,random,output,tries,restart
    }
 
})();


let UIController  = (function () {
    let compNum = Controller.random

    let count = Controller.tries

    Controller.input.addEventListener('keyup' , ()=>{  
        if (Controller.input.value == 0) {
            Controller.input.value = ''
            return
        }
    })

    Controller.submitBtn.addEventListener('click', function(ev) {
        ev.preventDefault();

        if (Controller.input.value == '') {
            alert('input something in the field provided')
            return
        }

        if(count === 0){
            Controller.output.classList.toggle('failed') 
            Controller.output.textContent = 'Game over!'
            Controller.input.value = ''
            Controller.submitBtn.style.display = 'none'
            Controller.restart.style.display = 'inline-block'
            return
        }

        function control () {
            if (Controller.input.value == compNum) {
                Controller.output.classList.toggle('success') 
                Controller.output.textContent = 'You win , well played'
                Controller.submitBtn.style.display = 'none'
                Controller.restart.style.display = 'inline-block'
            }else {
                let tries = count > 1 ? 'tries' : 'try'
                Controller.output.textContent = `${Controller.input.value} is not correct you have ${count--} ${tries} left`
                // count--

                // if (count == 0) {
                //     Controller.output.textContent =`${Controller.input.value} is not correct you have 1 try left`
                // }

                // if (count == -1) {
                //     Controller.output.textContent = 'Game has ended , YOU LOST'
                // }
            }

            Controller.input.value = ''
        }

        control();
    })


    return {
        compNum,count
    }
})()

let init =  (()=>{
    Controller.restart.addEventListener('click', (e)=>{
        UIController.compNum
        UIController.count
    })
})()
 