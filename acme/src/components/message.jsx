import React, { Component } from 'react';
import moment from 'moment';


export default class Message extends Component {

    constructor(props) {
        super()
    }

    handleSameMessage = (rightDirection, message) => (
        <div className="messageDisplay">
                <div className={rightDirection ? "right messageText" : "left messageText"}>{message.text}</div>
        </div> 
    )

    handleNewAuthorMessage = (rightDirection, message) => (
        <div className="messageDisplay">
                <div className={rightDirection ? "rightHeader messageHeader" : "leftHeader messageHeader"}>{<img className="messageImage" src={message.userMessage.image} alt="logo img"/>} {message.userMessage.name}, {moment(message.date).format('LT')}</div>
                <div className={rightDirection ? "right messageText" : "left messageText"}>{message.text}</div>
        </div>
    )

    render() {
        const {
            message,
            sameAuthor,
            sameHour,
            rightDirection,
        } = this.props;
        return (
            <div className="messageContext" id="inner">
                {
                    sameHour && sameAuthor ?
                        this.handleSameMessage(rightDirection, message)
                    :
                        this.handleNewAuthorMessage(rightDirection, message)
                }
            </div>

        )
    }
};