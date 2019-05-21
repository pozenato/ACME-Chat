import React, { Component} from 'react';
import { Menu, Dropdown, Icon, Button, message } from 'antd';


class UserSelector extends Component {

  constructor(props) {
    super()
  }

  handleButtonClick = (e) => {
    message.info('Click on left button.');
  }

  handleMenuClick = (e) => {
    this.props.handleUserSelected(e.key)
  }

  menuItems = () => {
    if (this.props.users) {
      return (
        <Menu onClick={(this.handleMenuClick)} className="menuConteiner">
          {
            this.props.users.map(u => {
              return (
                <Menu.Item className="userItemMenu" key={u.id}>
                      <img className="userImage" src={u.image} alt="logo img"/>
                      <h4 className="nameItem">{u.name}</h4>
                </Menu.Item>
              )
            })
          }
        </Menu>
      )
    }
    return <Menu />;
  };

render() {

    const { userSelected, defaultText } = this.props;

    return (
      <div id="components-dropdown-userSelector-dropdown-button">
        <Dropdown className="DropDownMenu" overlay={this.menuItems()}>
          <Button>
            {
              userSelected.id > 0 ? 
              <div className="userItemMenu">
                <img className="userImage" src={userSelected.image} alt="logo img"/>
                  <h4 className="nameItem">{userSelected.name}</h4>
              </div> : 
              <div>
                {defaultText}
                <Icon className="searchIcon" type="down" />
              </div>
            }            
          </Button>
        </Dropdown>
      </div>
    );
  }
}

export default UserSelector;