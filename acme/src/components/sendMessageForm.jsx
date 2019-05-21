import React, { Component } from 'react';
import component from '../components';
import { Input, Button } from 'antd';
import moment from 'moment';
import findUserSelected from '../utils/sharedFunctions';
import constants from '../utils/constants';


class SendMessageForm extends Component {

    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }

    getInitialState() {
        return {
            userSelected: 0,
            messageValue: '',
        }
    }

    handleUserSelected = user => {
        const userSelected = findUserSelected(user, this.props.users);
        this.setState({ userSelected });
    }

    handleSubmitMessage = () => {
        this.props.addNewMessage({            
            user: this.state.userSelected, 
            date: moment(),
            text: this.state.messageValue,
        }
        );
        this.setState({ messageValue: '' })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.handleSubmitMessage();
    }

    render() {
        const {
            userSelected,
            messageValue,
        } = this.state;
        const {
            users,
        } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="sendMessageContext">
                    <div className="selectorMessage">
                        <component.userSelector
                            userSelected={userSelected}
                            handleUserSelected={this.handleUserSelected}
                            users={users}
                            defaultText={constants.userSelector.sendMessageDefaultText}
                        />         
                    </div>
                    <Button shape="circle" type="primary"  icon="search" onClick={this.props.showModal} />
                    <div className="inputMessage">
                        <Input
                            placeholder="Type a Message"
                            disabled={userSelected === 0}
                            value={messageValue}
                            onChange={e => this.setState({ messageValue: e.target.value })} />
                    </div>
                    <div className="sendButton">
                        <Button
                            type="primary"
                            shape="round"
                            icon="rocket"
                            size='large'
                            disabled={messageValue === ""}
                            onClick={this.handleSubmitMessage}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </form>
        );
    };

}

export default SendMessageForm;