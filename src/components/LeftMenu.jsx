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

const navStyle = {
    color: 'inherit',
    textDecoration: 'none'
}

const cursorStyle = {
    cursor: 'pointer'
}

class LeftMenu extends React.Component {
    constructor() {
        super();
    }

    menuClick() {

    }

    render() {
        let leftMentList = this.props['left-menu-list'];
        leftMentList.forEach((item) => {
            if (item.subMenu) {
                item.collapse = true;
            }
        })
        let className = this.props['className']
        return (
            <div className={className}>
                <List component="nav" onClick={this.menuClick}
                      subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
                    {leftMentList.map((menu, index) => {
                        console.log(menu.subMenu)
                        return (
                            menu.subMenu ? 
                            <div>
                                <ListItem style={cursorStyle}>
                                    <ListItemIcon><menu.icon /></ListItemIcon>
                                    <ListItemText inset primary={menu.label}></ListItemText>
                                </ListItem>
                                <Collapse in={true} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                    {menu.subMenu.map((menu, index) => {                        
                                        return (
                                            <NavLink to={menu.url} style={navStyle}>
                                                <ListItem button>                                
                                                    <ListItemIcon><menu.icon /></ListItemIcon>
                                                    <ListItemText inset primary={menu.label} />
                                                </ListItem>
                                            </NavLink> 
                                        )
                                    })}
                                    </List>
                                </Collapse>
                            </div> :         
                            <NavLink to={menu.url} style={navStyle}>
                                <ListItem button>                                
                                    <ListItemIcon><menu.icon /></ListItemIcon>
                                    <ListItemText inset primary={menu.label} />
                                </ListItem>
                            </NavLink>                                                                                    
                        )
                    })}
                </List>
            </div>
        );
    }
}



export default withTheme()(LeftMenu)