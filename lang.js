const dictionary = {
    'pt': {
        'final-score': 'GxUxT (total) =',
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
        'final-score': 'GxUxT (total) =',
        'subject': [
            'Gravity',
            'Urgency',
            'Tendency'
        ],
        'gravity': [
            'No Gravity',
            'Low Gravity',
            'Grave',
            'High Gravity',
            'Extremelly Grave',
        ],
        'urgency': [
            'Can Wait',
            'A bit urgent, but the term is long',
            'As soon as possible',
            'Is urgent',
            'Needs imediatelly action'
        ],
        'tendency': [
            'The situation Won\'t get worse',
            'Will be worse in a long term',
            'Will be worse',
            'Will be worse if nothing is done',
            'Will be worse fast if nothing is done'
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
