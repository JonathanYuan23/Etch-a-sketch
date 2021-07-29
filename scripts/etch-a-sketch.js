const sketchPad = document.querySelector('#sketch-pad');

let width = 16;
let color = 'rgb(50, 50, 50)';
let click = 0;

function initialize() {
    for (let row = 1; row <= width; row++) {
        for (let col = 1; col <= width; col++) {
            const item = document.createElement('div');
            item.style.gridRow = `${row}`;
            item.style.gridColumn = `${col}`;
            item.classList.add('100');
            item.addEventListener('click', () => {
                item.style.backgroundColor = color;
                click = !click;
            });
            item.addEventListener('mouseover', () => {
                if (click) item.style.backgroundColor = color;
            });
            sketchPad.appendChild(item);
        }
    }
}

initialize();
