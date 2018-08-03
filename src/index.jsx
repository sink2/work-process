import React from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from './components/LeftMenu';
import TopBar from './components/TopBar';
import MainPane from './components/MainPane';
import {createStore} from 'redux';

function App() {
  return (
    <div>
      <LeftMenu className="wp-left-menu" />
      <TopBar className="wp-top-bar" />
      <MainPane className="wp-main-pane" />
    </div>
  );
}

ReactDOM.render(
  <div>
    <App />
  </div>
  , document.querySelector('#app'));