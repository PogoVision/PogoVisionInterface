import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

import MapIcon from '@material-ui/icons/Map';
import FilterIcon from '@material-ui/icons/FilterList';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from "react-router-dom";

import AppStyle from './AppStyle';

class AppDrawer extends Component {
    state = {
        open: true,
        checked: ['gyms', 'raids'],
    }

    handleFilterClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes, drawerState } = this.props;

        return (
            <Drawer
                variant="persistent"
                open={drawerState}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    <Link
                        to="/"
                        className={classes.drawerLink}>
                        <ListItem button>
                            <ListItemIcon>
                                <MapIcon />
                            </ListItemIcon>
                            <ListItemText inset primary="Map" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={this.handleFilterClick}>
                        <ListItemIcon>
                            <FilterIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Filters" />
                        {this.state.open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon />
                                <ListItemText inset primary="Pokemon" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon />
                                <ListItemText inset primary="Gyms" />
                                <ListItemSecondaryAction>
                                    <Switch
                                        onChange={this.handleToggle('gyms')}
                                        checked={this.state.checked.indexOf('gyms') !== -1}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon />
                                <ListItemText inset primary="Raids" />
                                <ListItemSecondaryAction>
                                    <Switch
                                        onChange={this.handleToggle('raids')}
                                        checked={this.state.checked.indexOf('raids') !== -1}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(AppStyle, { withTheme: true })(AppDrawer);
