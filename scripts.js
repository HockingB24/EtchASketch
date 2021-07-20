let grids = document.querySelector('.container');
let square = document.createElement('div');
let sizeBtn = document.querySelector('#choose-size');
let clearBtn = document.querySelector('#clear');

sizeBtn.addEventListener('click', chooseSize);
clearBtn.addEventListener('click', clear);

square.classList.add('square');
drawGrid(16);
let allSquares = document.querySelectorAll('.square');





function chooseSize() {
    let winLength = prompt("Enter the length of the new window! ");
    if (winLength != null) {
        drawGrid(winLength);
    }
}

function drawSquare(e) {
    this.style.backgroundColor = 'black';
}
function drawGrid(winLength) {
    removeChildNodes(grids);
    grids.style.gridTemplateColumns = 'repeat(' + winLength + ', 1fr)';
    for (let i = 0; i<(winLength**2); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', drawSquare);
        grids.appendChild(square);
        
    }

    let allSquares = document.querySelectorAll('.square');


}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clear() {
    console.log("hi");
    //console.log(allSquares);
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach(allSquares => allSquares.style.backgroundColor = 'white');
}


