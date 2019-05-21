import React, { Component } from 'react'
import component from '../components'
import section from '../section';


class ChatSection extends Component {

    constructor(props) {
        super()
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            visible: false,
        }
    }
    
    componentDidUpdate(prevProps, prevState){
        this.scrollToBottom();
      }
      
    scrollToBottom() {
        const {thing} = this.refs;
        thing.scrollTop = thing.scrollHeight - thing.clientHeight;
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {

        const {
            messages,
            users,
            addNewMessage,
        } = this.props;
        const { visible } = this.state;

        return (
            <div>
                <header><component.header /></header>
                <div id='main'>
                    <section.SearchSection
                        users={users}
                        messages={messages}
                        handleCancel={this.handleCancel}
                        handleOk={this.handleOk}
                        visible={visible}

                    />
                    <article ref={`thing`} ><component.messageList messages={messages}/></article>
                    <nav>
                        <component.chatMemberList
                            messages={messages}
                        />
                    </nav>
                </div>
                <footer>
                    <component.sendMessageForm
                        users={users}
                        addNewMessage={addNewMessage}
                        showModal={this.showModal}
                    />
                </footer>
            </div>
        )
    }
}

export default ChatSection;