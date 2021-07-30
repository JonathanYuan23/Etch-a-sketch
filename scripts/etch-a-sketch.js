const sketchPad = document.querySelector('#sketch-pad');
const resetBtn = document.querySelector('#resetBtn');
const clearBtn = document.querySelector('#clearBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const colorBtn = document.querySelector('#colorBtn');
const randomBtn = document.querySelector('randomBtn');

const color = 'rgb(50, 50, 50)';
const resetColor = 'rgb(255, 255, 255)';

let mode = 'color';
let click = 0;

function randomRGB() {}

function changeColor(e) {}

function initialize(width) {
    for (let row = 1; row <= width; row++) {
        for (let col = 1; col <= width; col++) {
            const item = document.createElement('div');

            /*
            for future use if I ever want to add more complex functionality involving opacity

            ================================
            item.style.gridRow = `${row}`;
            item.style.gridColumn = `${col}`;
            item.classList.add('100');
            ================================
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
        sketchPad.childNodes.forEach(function (e) {
            e.style.backgroundColor = resetColor;
        });
    });
    eraseBtn.addEventListener('click', () => (mode = 'erase'));
    colorBtn.addEventListener('click', () => (mode = 'color'));
    randomBtn.addEventListener('click', () => (mode = 'random'));
}

initialize(16);
initializeOptions();
