let gravity = 1
let urgency = 1
let tendency = 1
let score = 1


const clearSelected = (className) => {
    var elements = document.getElementsByClassName(className)
    if (!elements) { return }
    for (let index = 0; index < elements.length; index++) {
        const hasSelected = elements[index].classList.contains('selected')
        if (!hasSelected) { continue }
        elements[index].classList.remove('selected')
        break
    }
}

const addSelected = (element) => element.classList.add('selected')

const getOptionScore = (element) => {
    const elementScore = element.querySelector('#option-value').innerText
    return parseInt(elementScore, 10)
}

const calcTotal = () => score = gravity * urgency * tendency

const updateScore = () => {
    const scoreElement = document.getElementById('score')
    scoreElement.textContent = score
}

const calc = () => {
    calcTotal()
    updateScore()
}

const gravityChanged = (event) => {
    const currentElement = event.currentTarget
    clearSelected('gravity')
    addSelected(currentElement)
    const currentGravityScore = getOptionScore(currentElement)
    gravity = currentGravityScore
    calc()
}

const urgencyChanged = (event) => {
    const currentElement = event.currentTarget
    clearSelected('urgency')
    addSelected(currentElement)
    const currentUrgencyScore = getOptionScore(currentElement)
    urgency = currentUrgencyScore
    calc()
}

const tendencyChanged = (event) => {
    const currentElement = event.currentTarget
    clearSelected('tendency')
    addSelected(currentElement)
    const currentTendencyScore = getOptionScore(currentElement)
    tendency = currentTendencyScore
    calc()
}
