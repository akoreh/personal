import React, { createRef, useEffect } from 'react';
import { TweenMax, Expo } from 'gsap';

import { IS_DEV, LOADING_SCROLL_DURATION } from '../../constants';

import cls from './Dock.module.scss';

const Dock = () => {
    const dockRef = createRef();

    const animateDock = () => {
        const target = dockRef.current;
        
        if (IS_DEV) {
            TweenMax.set(target, {y: 0});
        } else {
            TweenMax.to(target, 1, {y: 0, ease: Expo.easeOut, delay: LOADING_SCROLL_DURATION - .5});
        }
    };

    useEffect(animateDock, []);

    return <div className={cls.dock} ref={dockRef}>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
        <li className={cls.icon}></li>
    </div>;
};

export default Dock;