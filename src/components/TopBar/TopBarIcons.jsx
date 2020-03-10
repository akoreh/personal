import React from 'react';

import Icon from '../Icons/Icon';

//! Assets
import batteryAnimationData from '../../assets/anim/battery.json';
import wifiAnimationData from '../../assets/anim/wifi.json';

import { LOADING_SCROLL_DURATION } from '../../constants'; 

import cls from './TopBarIcons.module.scss';

const icons = [
    {
        key: 'wifiIndicator',
        className: cls.wifiIndicator,
        animationData: wifiAnimationData,
        loop: false,
        autoplay: true,
        speed: 0.5,
        startDelay: LOADING_SCROLL_DURATION,
    },
    {
        key: 'batteryIndicator',
        animationData: batteryAnimationData,
        className: cls.batteryIndicator,
        loop: true,
        autoplay: true,
        speed: 0.5,
        startDelay: LOADING_SCROLL_DURATION,
    },
];

const TopBarIcons = () => (
    <div className={cls.topBarIcons}>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </div>
);

export default TopBarIcons;