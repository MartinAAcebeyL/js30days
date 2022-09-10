const ver = x => console.log(x);

const brujula = document.querySelector('svg');
const speed = document.querySelector('.speed');
const latitud = document.querySelector('.latitud');
const longitud = document.querySelector('.longitud');

if(navigator.geolocation){
    navigator.geolocation.watchPosition(data =>{
        brujula.style.transform = `rotate(${data.coords.heading}deg)`;
        speed.textContent = data.coords.speed;
        latitud.textContent = `Latitud: ${data.coords.latitude}`;
        longitud.textContent = `Longitud: ${data.coords.longitude}`;
    }, (err) =>{
        ver(err);
    })
}else
    ver('no se puede usar la api de geolocalizacion')
