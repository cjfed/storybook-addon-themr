import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';
import { ThemeProvider } from 'react-css-themr';

export const ADDON_ID = 'cjfed/themr';
export const PANEL_ID = `${ADDON_ID}/panel`;
export const EVENT_ID = `${ADDON_ID}/event`;

export class Themr extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            themeName: ''
        }
    }

    componentDidMount () {
        const channel = addons.getChannel();
        channel.emit(`${EVENT_ID}/data`, this.props.themes);
        channel.removeAllListeners(`${EVENT_ID}/change`);
        channel.on(`${EVENT_ID}/change`, themeName => this.setState({themeName}));
    }
    
    render () {
        const {children} = this.props;
        let theme = this.props.themes[this.state.themeName] || {}
        theme = theme.theme || {}
        return (
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        )
    }
}

Themr.propTypes = {
    themes: PropTypes.object.isRequired
}

export default Themr;