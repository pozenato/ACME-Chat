import React, { Component } from 'react'

class chatMemberList extends Component {

    constructor(props) {
        super()
    }

    fetchChatMembers = () => {
        let unique = null;
        let messageUsers = [];
        if (this.props.messages) {
            messageUsers = this.props.messages.map(m => m.userMessage);
            unique = [ ...new Set( messageUsers ) ];
        }
        return unique;
    }

    render() {
        const users = this.fetchChatMembers();

        return (
            <div>
                <h1 className="chatMemberTitle">Chat Members</h1>
                {
                    users !== null ?
                        users.map(m => (
                            <div className="chatMemberContext" key={m.id}>
                                <img className="chatMemberImage" src={m.image} alt="logo img"/>
                                <h4 className="chatMemberName">{m.name}</h4>
                            </div>
                        )) 
                    : 
                        null
                }
            </div>
        )
    }
}

export default chatMemberList;