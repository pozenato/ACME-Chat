export default function message(state = [], action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [ ...state, {
                id: Math.random(), 
                text: action.text,
                date: action.date,
                userMessage: action.userMessage,
            }]
        default:     
            return state;
    }
}