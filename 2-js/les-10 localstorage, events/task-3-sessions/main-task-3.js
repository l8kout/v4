let mainDiv = document.createElement('div');
let array = JSON.parse(localStorage.getItem('time'));
for (const arrayElement of array) {
    let div = document.createElement('div');
    div.innerText = arrayElement
    mainDiv.appendChild(div);
}

document.body.appendChild(mainDiv)