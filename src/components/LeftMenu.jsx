import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import { getCurrentTheme } from '../services/ThemeFactory';
import { NavLink } from 'react-router-dom';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

class LeftMenu extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log()
        let leftMentList = this.props['left-menu-list'];
        let className = this.props['className']
        return (
            <div className={className}>
                <List component="nav"
                      subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>

                </List>
            </div>
        );
    }
}



export default withTheme()(LeftMenu)