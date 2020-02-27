import React, { useContext, Fragment } from 'react';

import Window from '../Window/Window';

import { windowsContext } from '../../store/WindowsProvider';

const DesktopIcons = () => {
    const { windows, closeWindow, maximizeWindow} = useContext(windowsContext);

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