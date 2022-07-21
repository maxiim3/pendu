let count = 0;
let word = "anticonstitutionnel"
let mistakes = []
const DOMElements = []

const letters = word.toUpperCase().split("")
const parent = document.querySelector('.letter-wrapper')
const submit = document.querySelector('button')
const input = document.querySelector('input')
createNode(letters)
DOMElements.forEach(el => {
    setClassTo(el, "letter hide")
    parent.appendChild(el)
})

function setClassTo(input, classes) {
    input.className = classes
}

function resetInput(input) {
    input.value = ""
}

function createNode(arr) {
    arr.forEach(el => {
        const spanLetter = document.createElement('span')
        spanLetter.innerText = el
        DOMElements.push(spanLetter)
    });
}

function lookForLetter(arr, value) {
    for (let index = 0; index < arr.length; index++) {

        if (arr[index].toUpperCase() === value.toUpperCase()) {
            count++
            setClassTo(DOMElements.at(index), "letter")
        }
        else {
            arr.push(value.toUpperCase())
        }
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    const inputValue = input.value

    lookForLetter(letters, inputValue)
    resetInput(input)
    let uniqueMistakes = [...new Set(mistakes)]
    console.log(uniqueMistakes)
    if (uniqueMistakes.length === 3) {
        const msg = document.createElement('div')
        msg.innerText = "YOU LOOOSE"
        msg.className = "letter"
        document.querySelector('.wrapper').appendChild(msg)
    }
    else if (count === letters.length) {
        const msg = document.createElement('div')
        msg.innerText = "YOU WOOOOONNNN"
        msg.className = "letter"
        document.querySelector('.wrapper').appendChild(msg)
    }
})


