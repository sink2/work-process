import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import LeftMenu from './components/LeftMenu';
import styleCss from '../public/style/style.css';

function App() {
  const menuList = [
    {label: 'Test1', click: () => {console.log(1)}},
    {label: 'Test2', click: () => {console.log(2)}}
  ]
  return (
    <LeftMenu wpUserType={1} wpMenuList={menuList}></LeftMenu>
  );
}

ReactDOM.render(<App />, document.querySelector('#left-menu'));