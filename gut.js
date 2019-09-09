let gravity = 0
let urgency = 0
let tendency = 0
let score = 0

const calcTotal = () => {
    score = gravity * urgency * tendency
}

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

const gravityChanged = (event) => {
    const currentElement = event.currentTarget
    clearSelected('gravity')
    addSelected(currentElement)
}

const tendencyChanged = (event) => {
    const currentElement = event.currentTarget
    clearSelected('tendency')
    addSelected(currentElement)
}

const urgencyChanged = (event) => {
    const currentElement = event.currentTarget
    clearSelected('urgency')
    addSelected(currentElement)
}

const updateScore = () => {
    const scoreElement = document.getElementById('score')
    scoreElement.textContent = score
}

const calc = () => {
    calcTotal()
    updateScore()
}
