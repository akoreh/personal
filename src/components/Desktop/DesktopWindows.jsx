import React, { useContext, useEffect, Fragment } from 'react';

import Window from '../Window/Window';

import AppComingSoon from '../../apps/ComingSoon/ComingSoon';
import AppCalculator, { appSettings as calculatorAppSettings} from '../../apps/Calculator/Calculator';

import { windowsContext } from '../../store/WindowsProvider';
import { IS_DEV, LOADING_SCROLL_DURATION } from '../../constants';

const DesktopIcons = () => {
    const { windows, openWindow, closeWindow, maximizeWindow} = useContext(windowsContext);

    const openComingSoonWindow = () => openWindow(<AppCalculator />, calculatorAppSettings);

    useEffect(() => {
        setTimeout(openComingSoonWindow, IS_DEV ? 0 : LOADING_SCROLL_DURATION * 1000);
    }, []);

    return <Fragment>
        {windows.map(window => (
            <Window 
                key={window.id} 
                style={window.style}
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