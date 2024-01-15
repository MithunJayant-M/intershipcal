let arr = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3,'*','c',0,'/', '='];
const grid = document.getElementById('grid-container');
const display = document.querySelector('.display');

arr.forEach(item => {
    let button = document.createElement('button');
    button.className = 'grid-item';
    button.textContent = item;
    button.addEventListener('click', () => handleButtonClick(item));
    grid.appendChild(button);
});

function handleButtonClick(value) {
    if(value=='c'){
        <input type="button" value="c" onclick="clr()" /> 
    }
    if (value === '=') {
        display.textContent = eval(display.textContent);
    } else {
        display.textContent += value;
    }
}
