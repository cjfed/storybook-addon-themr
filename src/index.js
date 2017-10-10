import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';
import { ThemeProvider } from 'react-css-themr';

export class Themr extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            themeName: ''
        }
    }

    componentDidMount () {
        const channel = addons.getChannel();
        channel.emit('cjfec/themr/event/data', this.props.themes);
        channel.removeAllListeners('cjfec/themr/event/change');
        channel.on('cjfec/themr/event/change', themeName => this.setState({themeName}));
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