import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

import { HashRouter as Router } from "react-router-dom";

import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';

import AppContent from './AppContent';
import AppDrawer from './AppDrawer';
import AppHeader from './AppHeader';
import AppStyle from './AppStyle';

const mainTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
  },
});

class App extends Component {
  state = {
    open: false
  }

  constructor(props) {
    super(props);

    this.handleDrawerState = this.handleDrawerState.bind(this);
  }

  handleDrawerState(state) {
    this.setState({ open: state });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <MuiThemeProvider theme={mainTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppHeader drawerState={open} setDrawerState={this.handleDrawerState} />
          <Router>
            <React.Fragment>
              <AppDrawer drawerState={open} />
              <AppContent drawerState={open} />
            </React.Fragment>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(AppStyle, { withTheme: true })(App);
