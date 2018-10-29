import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { Marker } from 'react-map-gl';

import AppStyle from '../AppStyle';

class Pokemon extends Component {
    state = {
        tth: 0,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, latitude, longitude } = this.props;

        return (
            <Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
                <div className={classNames(classes.pokemon)} />
            </Marker>
        );
    }
}

export default withStyles(AppStyle, { withTheme: true })(Pokemon);
