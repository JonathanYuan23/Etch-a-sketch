
const sketchPad = document.querySelector('#sketch-pad');
let mouseDown = 0;

function initialize(width) {
    for (let row = 1; row <= width; row++) {
        for (let col = 1; col <= width; col++) {
            const item = document.createElement('div');
            item.style.gridRow = `${row}`;
            item.style.gridColumn = `${col}`;
            item.addEventListener('mousedown', () => {
                item.style.backgroundColor = 'rgb(50, 50, 50)';
                mouseDown = !mouseDown;
            });
            item.addEventListener('mouseover', () => {
                if(mouseDown) item.style.backgroundColor = 'rgb(50, 50, 50)';
            });
            sketchPad.appendChild(item);
        }
    }
}

initialize(16);