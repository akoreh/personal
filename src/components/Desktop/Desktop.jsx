import React, { useState, useEffect } from 'react';

import ParallaxBackground from '../ParallaxBackground/ParallaxBackground';
import DesktopIcons from './DesktopIcons';
import Window from '../Window/Window';

import AppComingSoon from '../../apps/ComingSoon/ComingSoon';

import { IS_DEV, LOADING_SCROLL_DURATION } from '../../constants';

import backgrounds from './backgrounds';

import cls from './Desktop.module.scss';

const Desktop = () => {
    const [comingSoon, setComingSoon] = useState(false);

    useEffect(() => {
        setTimeout(() => setComingSoon(true), IS_DEV ? 0 : LOADING_SCROLL_DURATION * 1000);
    }, []);

    return <div className={cls.desktop} style={{paddingTop: '5rem'}}>
        <ParallaxBackground layers={backgrounds[0].layers}/>
        <DesktopIcons />
        {comingSoon && <Window style={{width: '40%', height: '45vh', zIndex: 500}}> 
            <AppComingSoon />        
        </Window>}
    </div>;
}

export default Desktop;
