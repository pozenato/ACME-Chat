import React, { Component } from 'react'
import { Modal, Input, Select } from 'antd';
import component from '../components';
import findUserSelected from '../utils/sharedFunctions';
import constants from '../utils/constants';
import moment from 'moment';

const Option = Select.Option;
const Search = Input.Search;

class SearchSection extends Component {

    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }

    getInitialState() {
        return {
            userSelected: 0,
            order: null,
            messagesToTable: [],
            text: '',
        }
    }

    handleUserSelected = user => {
        const userSelected = findUserSelected(user, this.props.users);
        this.handleSearch(this.state.text);
        this.setState({ userSelected });
    }

    handleOk = e => {
        this.props.handleOk();
        this.setState({
            userSelected: 0,
            order: null,
            messagesToTable: [],
            text: '',
        })
    };

    handleCancel = e => {
        this.props.handleCancel();
        this.setState({
            userSelected: 0,
            order: null,
            messagesToTable: [],
            text: '',
        })
    };

    handleChange = (value) => {
        this.handleSearch(this.state.text);
        this.setState({ order: value })
    };

    descOrder = (a, b) => (
        a.date - b.date
    )
    
    ascOrder = (a, b) => (
        b.date - a.date
    )

    messagesReformatted = (messages) => {
        const newMessages = messages.map(message => (
            {
                name: message.userMessage.name,
                date: moment(message.date).format('LT'),
                message: message.text,
            }
        ))
        return this.setState({ messagesToTable: newMessages })
    }

    searchedMessages = (messages, value, userSelected) => {
        if (userSelected.id > 0) {
           return messages
                .filter(message => message.text.includes(value))
                .filter(message => message.userMessage.id === userSelected.id)

        } else {
            return messages
                .filter(message => message.text.includes(value))

        }    
    }
     
    handleSearch = (value, callback) => {
        setTimeout(()=> {
            if (value !== '') {
                const { messages } = this.props;
                const { userSelected, order } = this.state;
                let searchedMessages = this.searchedMessages(messages, value, userSelected);
                let ordernedMessages = searchedMessages.sort(order === 'new' ? this.ascOrder : this.descOrder)
                return this.messagesReformatted(ordernedMessages);
            }            
         }, 0)
        return null;
    }

    render() {
        const { userSelected, order, messagesToTable, text } = this.state;
        const { users, visible } = this.props;
        return (
            <div>
                <Modal
                    title="Search Message"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={1000}
                    footer={null}
                    >
                    <div className="modalContext">
                        <component.userSelector
                            userSelected={userSelected}
                            handleUserSelected={this.handleUserSelected}
                            users={users}
                            defaultText={constants.userSelector.searchMessageDefaultText}
                        />
                        <Select defaultValue="Order"  onChange={this.handleChange}>
                            <Option value={null}>Order by</Option>
                            <Option value="new">Newest First</Option>
                            <Option value="old">Oldest First</Option>
                        </Select> 
                        <Search
                            className="searchInput"
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            value={text}
                            onChange={e => this.setState({ text: e.target.value })}
                            disabled={order === null}
                            onSearch={value => this.handleSearch(value)}
                        />
                    </div>
                    { messagesToTable.length <= 0 ? <h3 className="noData">No Result Found</h3> : <component.searchTable messages={messagesToTable}/>}
                </Modal>
            </div>
        )
    }
}

export default SearchSection;
