const ver = x => console.log(x);

const body = document.querySelector('body');
const text = document.querySelector('h1');

const objText = {
    x: text.getBoundingClientRect().x,
    y: text.getBoundingClientRect().y
}


function shadowMoves(event) {
    const obj = {
        with: event.target.offsetWidth,
        height: event.target.offsetHeight,
        posX: event.x,
        posY: event.y
    }

    const movX = Math.round(objText.x - obj.posX);
    const movY = Math.round(objText.y - obj.posY);

    text.style.textShadow = `${ movX }px ${ movY }px red,
                             ${ movY }px ${ movX }px yellow,
                             ${ -movX }px ${ movY }px green,
                             ${ -movY }px ${ movX }px purple`;
}

body.addEventListener('mousemove', shadowMoves);



/*
    // ${yWalk}px      ${xWalk * -1}px green,
    // ${yWalk * -1}px ${xWalk}px      purple

*/