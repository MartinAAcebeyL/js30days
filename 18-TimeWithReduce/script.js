const ver = x => console.log(x);

const lis = document.querySelectorAll('li');
const times = Array.from(lis).map(el => el.dataset.time);


function finalTime(time=times) {
    const timeSepared = time.map(el => [auxMin, auxSec] = el.split(':'));
    
    let min = [];
    let sec = [];

    timeSepared.forEach(el => {
        min.push(el[0]);
        sec.push(el[1]);
    });

    let addMinutes = 0;
    const totalSeconds = sec.reduce((total, element) =>{
        if(total > 60){
            addMinutes++;
            total = total - 60;
        }
        total += parseInt(element);
        return total;
    },0)

    let addHours = 0;
    const totalMinutes = min.reduce((total, element)=>{
        if (total > 60) {
            addHours++;
            total = total - 60;
        }
        total += parseInt(element);
        return total;
    }, addMinutes);


    ver(`${addHours}:${totalMinutes}:${totalSeconds}`);
}

finalTime();