import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemList = this.props.wpMenuList.map(item => <div key={item.label}>{item.label}</div>)
    return (
      <div onClick={this.click}>
        {itemList}
      </div>
    );
  }
}

LeftMenu.defaultProps = {
  wpUserType: 0,
  wpMenuList: []
}

LeftMenu.propTypes = {
  wpUserType: PropTypes.number,
  wpMenuList: PropTypes.array
}

export default LeftMenu;