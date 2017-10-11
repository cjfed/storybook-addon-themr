import React from 'react';
import addons from '@storybook/addons'

import {ADDON_ID, PANEL_ID} from './';
import ThemrPanel from './components/ThemrPanel';

addons.register(ADDON_ID, api => {
    addons.addPanel(PANEL_ID, {
        title: '多主题',
        render: () => (
            <ThemrPanel channel={addons.getChannel()} api={api} />
        )
    })
});