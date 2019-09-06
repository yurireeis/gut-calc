let gravity = 1
let urgency = 1
let tendency = 1
let score = 0

const calc = () => {
    score = gravity * urgency * tendency
}

const updateScore = () => {
    const scoreElement = document.getElementById('score')
    scoreElement.textContent = score
}

const firstCalc = () => {
    calc()
    updateScore()
}
