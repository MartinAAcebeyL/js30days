const inputs = document.querySelectorAll("#controls input");

inputs.forEach(element => {
    element.addEventListener("change", changeValues)
});

function changeValues(element) {
    if(element.type != "file"){
        const medida = this.dataset.sizing || '';//px
        const value = element.target.value;
        document.documentElement.style.setProperty(`--${this.name}`, value + medida)
    }
}

const file = inputs[inputs.length-1]
file.addEventListener("change", mostrarImage)//cuando cambie el valor del input type:file se acciona

function mostrarImage(event) {//y esto trae un evento
    var reader = new FileReader();
    const img_label = document.querySelector('img') //etiqueta de <img>
    const img = event.target.files[0];
    const figcaption_alt = (event.target.files[0].name).slice(0,-4);

    reader.addEventListener('load',  event => {
        img_label.src = event.target.result
        img_label.alt = figcaption_alt;
        document.querySelector('figcaption').textContent = figcaption_alt;
    })
    reader.readAsDataURL(img);
}