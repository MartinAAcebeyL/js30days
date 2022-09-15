const lis = document.querySelectorAll('.ulMain > li')
const nav = document.querySelector('nav');
const desplegable = document.querySelector('.dropdownBackground')

const ver = x => console.log(x);

function show(event) {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 200);
    desplegable.classList.add('open');

    const hidenPorpetis = this.querySelector('.hidden');
    const coords = hidenPorpetis.getBoundingClientRect();

    desplegable.style.setProperty('width', `${coords.width}px`);
    desplegable.style.setProperty('height', `${coords.height}px`);
    desplegable.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function unshow() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    desplegable.classList.remove('open');
}

lis.forEach(el => el.addEventListener("mouseenter", show));
lis.forEach(el => el.addEventListener("mouseleave", unshow));