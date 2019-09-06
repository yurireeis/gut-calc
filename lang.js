const dictionary = {
    'pt': {
        'final-score': 'Resultado final',
        'subject': [
            'Gravidade',
            'Urgência',
            'Tendência'
        ],
        'gravity': [
            'Sem Gravidade',
            'Pouco Grave',
            'Grave',
            'Muito Grave',
            'Extremamente Grave',
        ],
        'urgency': [
            'Fica tranquilo, pode esperar',
            'pouco urgente, o prazo ainda é longo',
            'O mais rápido possível',
            'É Urgente',
            'Precisa de Ação Imediata'
        ],
        'tendency': [
            'A situação não tem tendência a piorar',
            'Irá piorar a longo prazo',
            'Irá piorar',
            'Irá piorar em pouco tempo se nada for feito',
            'Irá piorar rapidamente se nada for feito'
        ]
    },
    'en': {
        'final-score': 'Final Result',
        'subject': [
            'Gravity',
            'Urgency',
            'Tendency'
        ],
        'gravity': [
            'Sem Gravidade',
            'Pouco Grave',
            'Grave',
            'Muito Grave',
            'Extremamente Grave',
        ],
        'urgency': [
            'Fica tranquilo, pode esperar',
            'pouco urgente, o prazo ainda é longo',
            'O mais rápido possível',
            'É Urgente',
            'Precisa de Ação Imediata'
        ],
        'tendency': [
            'A situação não tem tendência a piorar',
            'Irá piorar a longo prazo',
            'Irá piorar',
            'Irá piorar em pouco tempo se nada for feito',
            'Irá piorar rapidamente se nada for feito'
        ]
    }
}

const setLanguage = (language) => {
    const finalScoreLabel = document.getElementById('final-score-label')
    finalScoreLabel.textContent = dictionary[language]['final-score']

    const subjectElements = document.getElementsByClassName('subject')
    subjectElements[0].textContent = dictionary[language]['subject'][0]
    subjectElements[1].textContent = dictionary[language]['subject'][1]
    subjectElements[2].textContent = dictionary[language]['subject'][2]
 
    for (let i = 0; i < 5; i++) {
        const descriptionElements = document.getElementsByClassName('description-' + i)
        descriptionElements[0].textContent = dictionary[language]['gravity'][i]
        descriptionElements[1].textContent = dictionary[language]['urgency'][i]
        descriptionElements[2].textContent = dictionary[language]['tendency'][i]
    }
}
