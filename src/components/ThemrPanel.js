import React from 'react';

class ThemrPanel extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            themeList: []
        };

        this.onLoadData = this.onLoadData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        const {channel, api} = this.props;

        channel.on('cjfec/themr/event/data', this.onLoadData);
    }

    onLoadData (data) {
        const themeList = [{
            value: '',
            title: '默认主题'
        }];
        for (let key in data) {
            themeList.push({
                value: key,
                title: data[key].title
            })
        }
        this.setState({themeList});
    }

    handleChange (value) {
        const {channel} = this.props;
        
        channel.emit('cjfec/themr/event/change', value);
    }

    render () {
        return (
            <div>
                <select onChange={e => this.handleChange(e.target.value)}>
                {
                    this.state.themeList.map(theme => <option value={theme.value} key={theme.value}>{theme.title}</option>)
                }
                </select>
            </div>
        );
    }
}

export default ThemrPanel;