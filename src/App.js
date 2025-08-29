import React, { Component } from 'react';
import '../resources/css/app.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import page from './page';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
		<Provider store={store}>
      <div>
			  <page.ChatPage />
      </div>
		</Provider>
    );
  }
}

export default App;
