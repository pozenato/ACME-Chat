import React, { Component } from 'react';
import section from '../section'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as messageActions from '../redux/actions/message';

class ChatContainer extends Component {
    constructor(props) {
        super()
    }

    addNewMessage = (message) => {
        this.props.addMessage(message);
    }

    render() {
        const {
            message,
            users,
        } = this.props;
        return (
            <div>
                <section.ChatSection
                    addNewMessage={this.addNewMessage}
                    messages={message}
                    users={users}
                />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    message: state.message,
    users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(messageActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);