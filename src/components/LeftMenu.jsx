import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from "react-router-dom";

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <List>
        {this.props.wpMenuList.map((item, index) => {
          return (
            <NavLink to={item.path} 
                     key={index}
                     className={"aaa"}
                     activeClassName="active">
              <ListItem button>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.label}></ListItemText>
              </ListItem>
            </NavLink>
          );
        })}
        </List>
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