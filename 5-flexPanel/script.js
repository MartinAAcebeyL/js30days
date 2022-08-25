const ver = ver => console.log(ver);

const panels = document.querySelectorAll('.panel')

function agrandar() {
    this.classList.toggle('open');
}

function mostarLetras(event){
    if (event.propertyName.includes('flex')) 
        this.classList.toggle('open-active');
}

panels.forEach(element => element.addEventListener("click", agrandar))
panels.forEach(element => element.addEventListener("transitionend", mostarLetras))