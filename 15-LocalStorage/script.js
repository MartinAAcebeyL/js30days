const ver = x => console.log(x);

const addForm = document.querySelector('.addForm');
const list = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

addForm.addEventListener("submit", addPlates);
list.addEventListener("click", chanceStatus);

function addPlates(event) {
    event.preventDefault();
    const text = document.getElementById('item').value;
    const item ={
        text,
        done: false
    }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    showItems();
    event.target.reset();
}

function chanceStatus(event) {
    if (!event.target.matches('input')) return
    const item = event.target;
    items[item.dataset.index].done = !items[item.dataset.index].done;
    localStorage.setItem('items', JSON.stringify(items));
    showItems();
}

function showItems() {
    list.innerHTML = items.map((el,index)=>{
        return `
            <li>
              <input type="checkbox" data-index=${index} id="item${index}" ${el.done ? 'checked' : ''} />
              <label for="item${index}">${el.text}</label>
            </li>
        `
    }).join('');
}

showItems();