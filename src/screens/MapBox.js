import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ReactMapGL, { NavigationControl } from 'react-map-gl';

import AppStyle from '../AppStyle';
import Pokemon from '../components/Pokemon';

const MAPTILER_STYLE = 'https://maps.tilehosting.com/styles/streets/style.json?key=wvrABD6khhu7CNLtQ2mo';

class MapBox extends Component {
    state = {
        viewport: {
            height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 64,
            width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            latitude: -23.568095,
            longitude: -46.64466,
            zoom: 13
        }
    };

    handleViewportChange = viewport => {
        this.setState({ viewport });
    }

    render() {
        const { classes } = this.props;

        return (
            <ReactMapGL
                className={classNames(classes.map)}
                disableTokenWarning={true}
                maxPitch={0}
                dragRotate={false}

                mapStyle={MAPTILER_STYLE}
                {...this.state.viewport}
                onViewportChange={this.handleViewportChange}
            >
                <div style={{ position: 'absolute', left: 0 }}>
                    <NavigationControl
                        onViewportChange={this.handleViewportChange}
                        showCompass={false}
                    />
                </div>
                <Pokemon latitude="-23.568095" longitude="-46.64466" />
            </ReactMapGL>
        );
    }
}

export default withStyles(AppStyle, { withTheme: true })(MapBox);
