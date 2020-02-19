import React from 'react';

import Icon from '../Icons/Icon';

//! Assets
import batteryAnimationData from '../../assets/anim/battery.json';
import wifiAnimationData from '../../assets/anim/wifi.json';

import cls from './TopBarIcons.module.scss';

const icons = [
    {
        key: 'wifiIndicator',
        className: cls.wifiIndicator,
        animationData: wifiAnimationData,
        loop: true,
        autoplay: true,
        speed: 0.5,
    },
    {
        key: 'batteryIndicator',
        animationData: batteryAnimationData,
        className: cls.batteryIndicator,
        loop: true,
        autoplay: true,
        speed: 0.5,
        startDelay: 10,
    },
];

const TopBarIcons = () => (
    <div className={cls.topBarIcons}>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </div>
);

export default TopBarIcons;