const timer__button = document.querySelectorAll('.timer__button');
const display__end = document.querySelector('.display__end-time');
const display__time = document.querySelector('.display__time-left');

const ver = x => console.log(x);

const now = Date.now();
let timer_ = false;
let timeH1;

function saberHoras(minutos) {
    let h = 0;
    while(minutos>60){
        minutos-=60;
        h++;
    }
    return{
        'horas':h,
        'minutos':minutos
    }
}

function time() {
    const add_time = parseInt(this.dataset.time) 
    let new_hour = parseInt(new Date().getHours());
    let new_min  = Math.round(parseInt(new Date().getMinutes()) + (add_time/60));
    if (new_min >60){
        const data = saberHoras(new_min);
        new_hour = new_hour + data.horas;
        new_min = data.minutos
        new_min= new_min <10?'0'+new_min:new_min;        
    }

   
    display__end.textContent = `Hora: ${new_hour}:${new_min}`
    timer((add_time / 60));
}
let interval;
function timer(time) {
    clearInterval(interval);
    timeH1 = {
        'min':time,
        'sec':0
    }
    if(time < 1){
        timeH1 = {
            'min': 0,
            'sec': 20
        }
    } 
    
    let min = timeH1.min;
    let sec = timeH1.sec;
    
    interval = setInterval(() => {

        display__time.textContent = `${min}:${sec}`;
        if( sec <= 0){
            sec = 60;
            min--;
        }

        if (min <=0 && sec <= 0){
            clearInterval(interval)
            return

        }
        sec--;

    }, 1000)
} 


timer__button.forEach(el => el.addEventListener('click', time))

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    let new_min = Math.round(parseInt(new Date().getMinutes()) + (mins / 60));

    display__end.textContent = `Hora: ${new Date().getHours()}:${new_min}`;
    timer(mins);
    this.reset();
});