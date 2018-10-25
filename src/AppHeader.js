import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import AppStyle from './AppStyle';

class AppHeader extends Component {
    handleDrawerToggle = () => {
        this.props.setDrawerState(!this.props.drawerState);
    };

    render() {
        const { classes, drawerState } = this.props;

        return (
            <AppBar
                position="absolute"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open menu"
                        onClick={this.handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        PogoVision
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(AppStyle, { withTheme: true })(AppHeader);
