export function addMessage(message) {
    return {
        type: 'ADD_MESSAGE',
        text: message.text,
        date: message.date,
        userMessage: message.user
    }
}