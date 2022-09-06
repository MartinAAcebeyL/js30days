const ver = x => console.log(x);

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortBands = bands.sort((a, b) =>{
    const A = a.split(" ").join("").toLowerCase();
    const B = b.split(" ").join("").toLowerCase();

    return strip(A) > strip(B) ? 1 : -1
});

const ul = document.querySelector('ul');

const algo = sortBands.map(el =>`<li> ${el}</li>`).join('')

ul.innerHTML = algo;

ver(algo);