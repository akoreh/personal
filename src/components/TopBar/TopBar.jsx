import React, { useContext, useEffect, createRef } from 'react';
import moment from 'moment';
import { TweenMax, Expo } from 'gsap';

import { systemTimeContext } from '../../store/SystemTimeProvider';
import { windowsContext } from '../../store/WindowsProvider';
import { IS_DEV, L_S_TIME, SCROLL_TO_TOP_DURATION } from '../../constants';

import { C } from '../../util';

import cls from './TopBar.module.scss';
import TopBarIcons from './TopBarIcons';
import WindowButtons from '../WindowButtons/WindowButtons';

const TopBar = () => {
    const systemTime = useContext(systemTimeContext);
    const { getMaximizedWindow, closeWindow, maximizeWindow } = useContext(windowsContext);
    const maximizedWindow = getMaximizedWindow();
    const topBarRef = createRef();

    const animateTopBar = () => {
        const delay = L_S_TIME + SCROLL_TO_TOP_DURATION;
        const target = topBarRef.current;
        
        if (IS_DEV) {
            TweenMax.set(target, {y: 0});
        } else {
            TweenMax.to(target, 1, {y: 0, ease: Expo.easeOut, delay});
        }
    };

    useEffect(animateTopBar, []);

    console.log('maximizedWindow', maximizedWindow);

    return <nav className={cls.topBar} ref={topBarRef}>
        <div className={cls.left}>
            {maximizedWindow && (
                <WindowButtons 
                    onClose={closeWindow.bind(this, maximizedWindow.id)}
                    onMaximize={maximizeWindow.bind(this, maximizedWindow.id)}
                />
            )}
            <h1 className={cls.brand}>
                {!maximizedWindow ? 'Koreh' : maximizedWindow.title}
            </h1>
        </div>
        <div className={cls.center}>
        </div>
        <div className={cls.right}>
            <TopBarIcons />
            <span className={C(cls.time, 'no-select')}>{moment(systemTime).format('ddd Do MMM HH:mm')}</span>
        </div>
    </nav>;
}

export default TopBar;
