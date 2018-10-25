import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { Route, Switch } from "react-router-dom";

import MapBoxScreen from './screens/MapBox';
import AboutScreen from './screens/About';

import AppStyle from './AppStyle';

class AppContent extends Component {
    render() {
        const { classes, drawerState } = this.props;

        return (
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: drawerState,
                })}
            >
                <div className={classes.toolbar} />

                <Switch>
                    <Route exact path="/" component={MapBoxScreen} />
                    <Route path="/about" component={AboutScreen} />
                </Switch>
            </main>
        );
    }
}

export default withStyles(AppStyle, { withTheme: true })(AppContent);
