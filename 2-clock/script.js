const manecilla_hour = document.getElementsByClassName('hour');
const manecilla_minutes = document.getElementsByClassName('minutes');
const manecilla_seconds = document.getElementsByClassName('seconds');


function reloj(){
    let date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    manecilla_seconds[0].style.transform = `rotate(${secondsDegrees}deg)`;

    const minutessDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    manecilla_minutes[0].style.transform = `rotate(${minutessDegrees}deg)`;

    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    manecilla_hour[0].style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(reloj, 1000);
reloj();