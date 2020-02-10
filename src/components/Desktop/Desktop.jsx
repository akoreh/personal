import React from 'react';

import ParallaxBackground from '../ParallaxBackground/ParallaxBackground';
import DesktopIcons from './DesktopIcons';

import backgrounds from './backgrounds';

import cls from './Desktop.module.scss';

const Desktop = () => (
    <div className={cls.desktop} style={{paddingTop: '5rem'}}>
        <ParallaxBackground layers={backgrounds[0].layers}/>
        <DesktopIcons />
    </div>
);

export default Desktop;
