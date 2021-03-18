const UPDATE_INTERVAL = 3000;
const UPDATE_DELAY = 600;
const TRANSITION_DURATION = 1000;

const colors = [
    'var(--color-yellow)',
    'var(--color-pink)',
    'var(--color-green)',
    'var(--color-yellow)',
    'var(--color-magenta)',
    'var(--color-pink)',
    'var(--color-green)',
    'var(--color-magenta)',

];
const designTexts = [
    'design',
    'craft',
    'grow',
    'attract',
];
const fulfilmentTexts = [
    'fulfilment',
    'delivery',
    'returns',
    'stock',
];

const designPill = document.querySelector('.pill--design');
const fulfilPill = document.querySelector('.pill--fulfilment');
let designText = document.querySelector('.hero__design');
let fulfilText = document.querySelector('.hero__fulfilment');

let colorCounter = -1;
function getNextColor() {
    colorCounter = (colorCounter + 1) % colors.length;
    return colors[colorCounter];
}

function changeColor(element) {
    const randomColor = getNextColor();
    
    element.style.setProperty('--pill-background', randomColor);
}

let designCounter = 0;
function getNextDesignText() {
    designCounter = (designCounter + 1) % designTexts.length;
    return designTexts[designCounter];
}

let fulfilmentCounter = 0;
function getNextFulfilmentText() {
    fulfilmentCounter = (fulfilmentCounter + 1) % fulfilmentTexts.length;
    return fulfilmentTexts[fulfilmentCounter];
}

async function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function animateTextChange(textElement, newText) {
    const pill = textElement.parentElement;
    const newTextElement = textElement.cloneNode(true);
    newTextElement.innerHTML = newText;
    pill.appendChild(newTextElement);
    textElement.classList.add('pill__text--hidden');
    setTimeout(() => {
        pill.removeChild(textElement);
    }, TRANSITION_DURATION);
}

function changeDesignText() {
    designText = document.querySelector('.hero__design');
    const newText = getNextDesignText();
    animateTextChange(designText, newText);
}

function changeFulfilText() {
    fulfilText = document.querySelector('.hero__fulfilment');
    const newText = getNextFulfilmentText();
    animateTextChange(fulfilText, newText);
}

async function updateHero() {
    changeColor(designPill);
    changeDesignText();
    await wait(UPDATE_DELAY);
    changeColor(fulfilPill);
    changeFulfilText();
}

const interval = setInterval(updateHero, UPDATE_INTERVAL);