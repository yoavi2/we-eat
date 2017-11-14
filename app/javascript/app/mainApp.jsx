import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components';
import store from './store';

class MainApp extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}


ReactDOM.render(
  <MainApp />,
  document.body.appendChild(document.createElement('div')),
);


