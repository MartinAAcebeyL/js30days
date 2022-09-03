const ps = document.querySelectorAll('p');

let i =0;
ps.forEach(el =>{
    i % 2 == 0 ? el.style.color = 'green' : el.style.color = 'red';
    i++;
});
const ver = x=>console.log(x);

const images = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function Scroll(event) {
    images.forEach(el =>{
        const rect = el.getBoundingClientRect();
        const proximidad = rect.y - window.innerHeight;
        //window.scrollY
        if (proximidad <= 0)
            el.classList.add('active');
        else
            el.classList.remove('active');
    })
}


window.addEventListener('scroll', debounce(Scroll))