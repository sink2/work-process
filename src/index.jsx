import React from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from './components/LeftMenu';
// import TopBar from './components/TopBar';
// import MainPane from './components/MainPane';
import { getUserMenu } from './routes/LeftMenuRouter'; 
import Define from './services/Define';
import css from './style/style.less';

function App() {
    return (
      <div>
        <LeftMenu className="wp-left-menu" left-menu-list={getUserMenu(Define.USER_TYPE)} />
        { /*<TopBar className="wp-top-bar" />*/ }
        {/* <MainPane className="wp-main-pane" /> */}
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));