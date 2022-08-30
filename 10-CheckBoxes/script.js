const checkboxes = document.querySelectorAll('input[type="checkbox"]')

var checkbox0;

function click(event){
    if (event.shiftKey && this.checked){
        let marcar = false
        checkboxes.forEach(checkbox =>{
            //el estado cambia cuando checkbox es igual al ultimo o 1ro
            if (checkbox === this || checkbox === checkbox0){
                marcar = !marcar;
                // console.log(`YES${checkbox}`)
            }

            if(marcar){
                console.log(checkbox);
                checkbox.checked = true;
            }
        });

    }
    checkbox0 = this;
}

checkboxes.forEach(element=>{
    element.addEventListener('click', click)
});