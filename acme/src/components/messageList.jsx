import React, { Component } from 'react'
import components from '../components'

export default class MessageList extends Component {

    constructor(props) {
        super()
    }

    compareMinuteswithMessages = (currentDate, lastMessage) => {
        const minutes = (currentDate.diff(lastMessage.date, 'minutes'));
        return minutes < 1 ? true : false;
    }

    render() {
        const { messages } = this.props;
        let sameAuthor, sameHour = false;
        let rightDirection = true;
        let lastMessage = null;
        return (
            <div>
                {messages.map(m => {
                    if (lastMessage !== null) {
                        sameAuthor = m.userMessage.name === lastMessage.userMessage.name || false;
                        if (sameAuthor) {
                            sameHour = this.compareMinuteswithMessages(m.date, lastMessage);
                        } else {
                            sameHour = false;
                            rightDirection = !rightDirection;
                        }
                    }
                    lastMessage = m;
                    return (
                        <components.message
                            key={m.id}
                            message={m}
                            sameAuthor={sameAuthor}
                            sameHour={sameHour}
                            rightDirection={rightDirection}
                        />
                        )
                    }
                )}
            </div>
        )
    }
}