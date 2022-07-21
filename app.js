/**
 * Count will be incremented after each valid letter
 * @type {number}
 */
let count = 0;

/**
 * Some random list of words
 * @type {string[]}
 */
let words = ['nobody', "atlas", "mountain", "parallel", "mathematics", "beautiful", "neighbour", "passive", "bounce"]

/**
 * Get a random index from **words**
 * @type {number}
 */
const random = Math.floor(Math.random() * words.length)

/**
 * Get the word at the random index
 * @type {string}
 */
let word = words[random]

/**
 * Will be used to store all the input keys that are invalid
 * @type {*[]}
 */
let mistakes = []

/**
 * Will be used to store all the DOM elements wich represents a span node for each letter of the worls
 * @type {*[]}
 */
const DOMElements = []


/**
 * Targets the div that will display the input letter
 * @type {HTMLElement}
 */
const displayInput = document.getElementById('display-input')

/**
 * Is an array of all letters split from **word**
 * @type {string[]}
 */
const letters = word.toUpperCase().split("")

/**
 * target the div that wraps all the letters in the DOM
 * @type {HTMLElement}
 */
const parent = document.querySelector('.letter-wrapper')

/**
 * For each letter of **letters**,
 * create a span node,
 * set its value/class/dataset and push it to the **DOMElement** array
 * @type {function}
 */
function createElements() {
    letters.forEach(letter => {
                        const spanLetter = document.createElement('span')
                        spanLetter.innerText = letter
                        spanLetter.className = 'letter'
                        spanLetter.dataset.isVisible = "false"
                        DOMElements.push(spanLetter)
                    }
    )
}

/**
 * for each **DOMElement** of the array, will add it to it's **parent** div
 * @type {function}
 */
function appendDomElements() {
    DOMElements.forEach(el => {
        parent.appendChild(el)
    })
}

/**
 * Add an event Listener to the **keydown** event,
 * Will check count, mistakes, and run setValid() if condition is fulfilled
 * @type {function}
 */
function listenToKeyInputs() {
    document.addEventListener('keydown', (event) => {
        const msg = document.createElement('div')
        const name = event.key;

        displayInput.dataset.displayInput = ""

        let uniqueMistakes = [...new Set(mistakes)]

        if (uniqueMistakes.length === 3) {
            msg.innerText = "YOU LOOOSE"
            msg.className = "main"
            document.querySelector('.wrapper').appendChild(msg)
        }
        else if (count === letters.length) {
            msg.innerText = "YOU WOOOOONNNN"
            msg.className = "main"
            document.querySelector('.wrapper').appendChild(msg)
            console.log(3)
        }
        else {
            uniqueMistakes.some(el => el !== name.toUpperCase() && mistakes.push(el.toUpperCase()));
            letters.some(el => el === name.toUpperCase() && count++)
            displayInput.dataset.displayInput = name.toUpperCase();
            console.log(letters.length)
            setValid(name)
        }


    }, false);
}

/**
 * Check if the value of the input {e} exist in the word, returns the index.
 *
 * From this **index**, get the **DOMElement**, and set its dataset to *'true'*
 * @type {function}
 * @param e
 */
function setValid(e) {
    const inputValue = e.toUpperCase()

    for (let index = 0; index < letters.length; index++) {
        if (letters[index] === inputValue) {
            DOMElements[index].dataset.isVisible = "true"
        }
    }
}

/**
 * Runs this function onload
 */
(function () {
    createElements()
    appendDomElements()
    listenToKeyInputs()

})()
