import { app } from '@kubevious/ui-framework';
import { Story } from '@storybook/react';
import React from 'react';
import { Properties } from '../Properties';
import { CallbackHook } from '@kubevious/ui-components';

import { SAMPLE_DN, SAMPLE_PROPS_DATA } from '../stories/data';

export default {
    title: 'Properties',
};

const sharedState = app.sharedState;


export const Default: Story = () => (
    <>
        <CallbackHook
            setup={() => {
                sharedState.set('selected_dn', SAMPLE_DN);
                sharedState.set('selected_object_props', SAMPLE_PROPS_DATA);
            }}
            cleanup={() => {
                app.sharedState.set("selected_dn", null)
                app.sharedState.set("selected_object_props", null)
            }}
            />
        <div style={{ background: '#1e1e1e', padding: '10px' }}>
            <Properties />
        </div>
    </>
);



export const NoSelection: Story = () => (
    <>
        <CallbackHook
            setup={() => {
                app.sharedState.set("selected_dn", null)
                app.sharedState.set("selected_object_props", null)
            }}
            cleanup={() => {
                app.sharedState.set("selected_dn", null)
                app.sharedState.set("selected_object_props", null)
            }}
            />
        <div style={{ background: '#1e1e1e', padding: '10px', height: '300px' }}>
            <Properties />
        </div>
    </>
);


export const DefaultLimitedHeight: Story = () => (
    <>
        <CallbackHook
            setup={() => {
                sharedState.set('selected_dn', SAMPLE_DN);
                sharedState.set('selected_object_props', SAMPLE_PROPS_DATA);
            }}
            cleanup={() => {
                app.sharedState.set("selected_dn", null)
                app.sharedState.set("selected_object_props", null)
            }}
            />
        <div style={{ background: '#1e1e1e', padding: '10px', height: '400px' }}>
            <Properties />
        </div>
    </>
);