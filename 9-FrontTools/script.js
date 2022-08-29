const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function cambio(e) {
    e.style.color = '#BADA55';
    e.style.fontSize = '50px';
}

// Regular
console.log('Hi that it a regular console')

// Interpolated
console.log('Hi that it a regular console: ', 'I am other mesage')

// Styled -> se consigue por '%c' al inicio
console.log('%c I am some great text', 'font-size:20px; background:red; text-shadow: 10px 10px 0 blue', '%c 2da cadena')

// warning!
console.warn('Esto es un msj con warn');

// Error :|
console.error('Esto es un msj con error');

// Info
console.info('Esto es un msj con info');

// Testing
console.assert(1 !== 1, 'Error con assert');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(dogs);//muestra las propieda y metodos de lo que le pases

console.clear();

// Grouping together
dogs.forEach(dog => {// agrupa de acuerdo a un criterio
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
// 
dogs.forEach(dog => {// agrupa de acuerdo a un criterio
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Martin');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Martin');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Martin');

// timing
console.clear()
console.time('fetching data');
fetch('https://api.github.com/users/MartinAAcebeyL')
    .then(response => response.json())
    .then(data => {
        console.timeEnd('fetching data');
        //para mostrar en una tabla
        console.table(data);
    });