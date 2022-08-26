const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

//fetch, api del navegador, para jugar con el protocolo Http/s
//
fetch(url)//se pone una url donde se obtendra informacion
  .then(response => response.json())//response es la respuesta del server
  .then(data => {//data, son los datos que responde el server
    cities.push(...data);
}).catch(error => console.log(error));//aqui se pone el codigo en caso de error

//para buscar lugares, retorna un array por filter
function findPlaces(word, cities) {//palabra, array 
    return cities.filter(place =>{
        let regex = new RegExp(word,"gi");
        // la bandera 'g' significa que buscara en toda la cadena e 'i' /
        // es para busque en mayusculay minusculas
        return  place.city.match(regex) || place.state.match(regex);    
    })
}

//para distinguir las decenas, centenas ...
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//para mostrar los resultados
function showSearch(event){
    //el contexto aqui(this), es lo que lo invoca
    const worl = this.value;
    let findPlacesArray = findPlaces(worl, cities);
    const html = findPlacesArray.map(place => {//esto se mandara como un template strin, para renderizar
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex,   `<span class="hl">${this.value}</span>`);// en caso que coincida, se pondra amarrilo el back
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
          </li>
        `;
      }).join('');// como devuelte con vector, lo convertimos a str
      suggestions.innerHTML = html;
}


const searchInput = document.querySelector('#search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', showSearch);
searchInput.addEventListener('keyup', showSearch);