const ver = x => console.log(x);
const as = document.querySelectorAll('a');

const span = document.createElement('span');
span.classList.add('highlight');
document.body.appendChild(span);

function chenaceColor(event) {
    const newCords = event.target.getBoundingClientRect();
    const coords = {
        x:newCords.x,
        y: newCords.y,
        width: newCords.width,
        height: newCords.height,
    }

    span.style.width = `${coords.width}px`;
    span.style.height = `${coords.height}px`;
    span.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
}

as.forEach(el=>{
    el.addEventListener('mouseenter', chenaceColor)
});