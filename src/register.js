import React from 'react';
import addons from '@storybook/addons'

import ThemrPanel from './components/ThemrPanel';

addons.register('cjfec/themr', api => {
    addons.addPanel('cjfec/themr/panel', {
        title: '多主题',
        render: () => (
            <ThemrPanel channel={addons.getChannel()} api={api} />
        )
    })
});