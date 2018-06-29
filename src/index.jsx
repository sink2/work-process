import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import LeftMenu from './components/LeftMenu';
import styleCss from './assert/css/material-page-style.css';
import { BrowserRouter } from 'react-router-dom'
import LeftMenuList from '../routes/dashboardMenu';

function App() {
  return (
    <LeftMenu wpUserType={1} wpMenuList={LeftMenuList} className="wp-main-left-menu"></LeftMenu>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.querySelector('.body'));