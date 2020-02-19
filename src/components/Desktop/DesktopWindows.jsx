import React, { useContext, useEffect, Fragment } from 'react';

import Window from '../Window/Window';

import AppComingSoon from '../../apps/ComingSoon/ComingSoon';

import { windowsContext } from '../../store/WindowsProvider';
import { IS_DEV, LOADING_SCROLL_DURATION } from '../../constants';

const DesktopIcons = () => {
    const { windows, openWindow, closeWindow, maximizeWindow} = useContext(windowsContext);

    const openComingSoonWindow = () => openWindow('Coming Soon', <AppComingSoon />);

    useEffect(() => {
        setTimeout(openComingSoonWindow, IS_DEV ? 0 : LOADING_SCROLL_DURATION * 1000);
    }, []);

    return <Fragment>
        {windows.map(window => (
            <Window 
                key={window.id} 
                style={{width: '40%', height: '45%', zIndex: 500}}
                onClose={closeWindow.bind(this, window.id)}
                onMaximize={maximizeWindow.bind(this, window.id)}
                {...window}
            >
                {window.content}
            </Window>
        ))}
    </Fragment>;
};

export default DesktopIcons;