import React from 'react';

import ParallaxBackground from '../ParallaxBackground/ParallaxBackground';
import DesktopIcons from './DesktopIcons';
import DesktopWindows from './DesktopWindows';

import backgrounds from './backgrounds';

import cls from './Desktop.module.scss';

const Desktop = () => {
    return <div className={cls.desktop} style={{paddingTop: '5rem'}}>
        <ParallaxBackground layers={backgrounds[0].layers}/>
        <DesktopIcons />
        <DesktopWindows />
    </div>;
}

export default Desktop;
