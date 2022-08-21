const keys = Array.from(document.querySelectorAll('.key'))

keys.forEach(element =>{
    element.addEventListener("transitionend", eliminar_transicion)
});

function eliminar_transicion(e) {
    e.target.classList.remove('playing');
}


function tecla_presionada(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(key){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        key.classList.add('playing');
        audio.currentTime = 0;//para moverse a un segungo del audio que indiques
        audio.play();
    } 
}

window.addEventListener("keydown", tecla_presionada);