const sketchPad = document.querySelector('#sketch-pad');
const resetBtn = document.querySelector('#resetBtn');
const clearBtn = document.querySelector('#clearBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const colorBtn = document.querySelector('#colorBtn');
const randomBtn = document.querySelector('#randomBtn');

const color = 'rgb(50, 50, 50)';
const resetColor = 'rgb(250, 250, 250)';

let mode = 'color';
let click = 0;

function random() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${random()}, ${random()}, ${random()})`;
}

function changeColor(e) {
    if (e.type === 'mouseover' && !click) return;
    if (e.type === 'click') click = !click;

    switch (mode) {
        case 'color':
            e.target.style.backgroundColor = color;
            break;
        case 'erase':
            e.target.style.backgroundColor = resetColor;
            break;
        case 'random':
            e.target.style.backgroundColor = randomRGB();
    }
}

function initialize(width) {
    (sketchPad.innerHTML = ''), (click = 0);
    sketchPad.style.gridTemplateRows = `repeat(${width}, 1fr)`;
    sketchPad.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    for (let row = 1; row <= width; row++) {
        for (let col = 1; col <= width; col++) {
            const item = document.createElement('div');

            /*
            for future use if I ever want to add more complex functionality involving opacity

            item.style.gridRow = `${row}`;
            item.style.gridColumn = `${col}`;
            item.classList.add('100');
            */

            item.addEventListener('click', changeColor);
            item.addEventListener('mouseover', changeColor);
            sketchPad.appendChild(item);
        }
    }
}

function initializeOptions() {
    resetBtn.addEventListener('click', () => {
        const newWidth = Number(
            prompt('Please enter a new grid dimension. (min 1, max 100)')
        );
        if (!newWidth || newWidth < 1 || newWidth > 100)
            alert('Please enter an integer dimension. (min 1, max 100)');
        else initialize(newWidth);
    });
    clearBtn.addEventListener('click', () => {
        click = 0;
        sketchPad.childNodes.forEach(function (e) {
            e.style.backgroundColor = resetColor;
        });
    });
    eraseBtn.addEventListener('click', () => {
        (mode = 'erase'), (click = 0);
    });
    colorBtn.addEventListener('click', () => {
        (mode = 'color'), (click = 0);
    });
    randomBtn.addEventListener('click', () => {
        (mode = 'random'), (click = 0);
    });
}

initialize(16);
initializeOptions();
