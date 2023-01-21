
const input = document.querySelector('input');
const rangeText = document.getElementById('rangetext')
const sketchArea = document.querySelector(`#sketcharea`);
const resetButton = document.getElementById('btn__reset');
const blackWhiteButton = document.getElementById('btn__bw');


function createElem() {
    let newElem = document.createElement('div');
    newElem.classList.add('griditem');
    sketchArea.appendChild(newElem);
}

function deleteElem() {
    for (let i = sketchArea.childNodes.length; i > 0; i--) {
        sketchArea.innerHTML = '';
    }
}

function updateGrid() {
    if (input.value == 1) {
        deleteElem();
        sketchArea.setAttribute('style', 'grid-template-columns: repeat(4, 1fr);');
        rangeText.textContent = "4";
        for (let i = 0; i < 16; i++) {
            createElem();
        }
        addElemBlackStyle();
    } else if (input.value == 2) {
        deleteElem();
        sketchArea.setAttribute('style', 'grid-template-columns: repeat(8, 1fr);');
        rangeText.textContent = "8";
        for (let i = 0; i < 64; i++) {
            createElem();
        }
        addElemBlackStyle();
    } else if (input.value == 3) {
        deleteElem();
        sketchArea.setAttribute('style', 'grid-template-columns: repeat(16, 1fr);');
        rangeText.textContent = "16";
        for (let i = 0; i < 256; i++) {
            createElem();
        }
        addElemBlackStyle()
    } else if (input.value == 4) {
        deleteElem();
        sketchArea.setAttribute('style', 'grid-template-columns: repeat(32, 1fr);');
        rangeText.textContent = "32";
        for (let i = 0; i < 1024; i++) {
            createElem();
        }
        addElemBlackStyle();
    }
}
let colorValue = '';
function colorRandomizer() {
    let randomNumber = Math.random();

    if (randomNumber < 0.25) {
        colorValue = '#e8e8e8';
    } else if (randomNumber < 0.5) {
        colorValue = '#f05454';
    } else if (randomNumber < 0.75) {
        colorValue = '#30475e';
    } else {
        colorValue = '#222831';
    }
}

function addElemBlackStyle() {
    const gridItem = document.querySelectorAll('.griditem');

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', () => {
            colorRandomizer()
            gridItem[i].style.backgroundColor = colorValue;
        });
    }
}

updateGrid(); // called to update the function upon initial page load

input.addEventListener('change', updateGrid)


resetButton.addEventListener('click', () => {
    const gridItem = document.querySelectorAll('.griditem');
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = `white`;
    }
});