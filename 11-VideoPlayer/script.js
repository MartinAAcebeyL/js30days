const ver = x => console.log(x);

const controls = document.querySelector('#controls');
const video = document.querySelector('video');
const play = controls.querySelector('.player_button');
const barra = document.querySelector('.progress');
const skipButtons = controls.querySelectorAll('[data-skip]');
const ranges = controls.querySelectorAll('.player_slider');

let isPause = true;
video.volume = 0.5;


play.addEventListener('click', () =>{
    play.textContent = isPause ? '❚❚' :'►';
    isPause = !isPause;
    isPause? video.pause():video.play();
});

setInterval(()=>{
    const tiempoVideo = video.duration;
    const tiempoNow = video.currentTime;
    const newWith = (tiempoNow*100)/tiempoVideo;

    barra.style.width = newWith+'%';
});

function rangesChances(event) {
    if(this.name == 'volume'){
        video.volume = this.value/100;
    }else{
        video.playbackRate = this.value;
    }
}

Array.from(ranges).forEach(el=>{
    el.addEventListener('change', rangesChances)
});

function skips(event) {
    const time = event.target.dataset.skip;
    video.currentTime += parseFloat(time);
}

skipButtons.forEach(el=>{
    el.addEventListener('click', skips)
});

function scrub(e) {
    const scrubTime = (e.offsetX / e.target.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

const a = document.querySelector('.content_progress').addEventListener('click', scrub);