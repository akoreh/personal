import React from 'react';

import DesktopIcons from './DesktopIcons';
import DesktopWindows from './DesktopWindows';

import cls from './Desktop.module.scss';

const Desktop = () => {
    return <div className={cls.desktop} style={{paddingTop: '5rem'}}>
        <DesktopIcons />
        <DesktopWindows />
    </div>;
}

export default Desktop;
