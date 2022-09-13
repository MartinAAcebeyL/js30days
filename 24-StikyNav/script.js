const mainNav = document.getElementById('main');
const logo = document.querySelector('.logo');
const site = document.querySelector('.site-wrap');

const ver = x => console.log(x);

function sitcky() {
    const navTop = mainNav.offsetTop;
    if (window.scrollY >= (navTop - 20)){
        logo.style.display = "block";
        document.body.classList.add('fixed-nav');
        site.classList.add('site-wrapComplete');
    }else{
        logo.style.display = "none";
        document.body.classList.remove('fixed-nav');
        site.classList.remove('site-wrapComplete');
    }
}

window.addEventListener('scroll', sitcky)