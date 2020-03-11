import React from 'react';

import Icon from '../Icons/Icon';

//! Assets
import speakerAnimationData from '../../assets/anim/speaker.json';
import wifiAnimationData from '../../assets/anim/wifi.json';
import bluetoothAnimationData from '../../assets/anim/bluetooth.json';
import batteryAnimationData from '../../assets/anim/battery.json';

import { LOADING_SCROLL_DURATION } from '../../constants'; 

import cls from './TopBarIcons.module.scss';

const icons = [
    {
        key: 'speaker',
        className: cls.speaker,
        animationData: speakerAnimationData,
        loop: false,
        autoplay: false,
        speed: 2,
    },
    {
        key: 'wifiIndicator',
        className: cls.wifiIndicator,
        animationData: wifiAnimationData,
        loop: true,
        autoplay: true,
        speed: 0.5,
        startDelay: LOADING_SCROLL_DURATION,
    },
    {
        key: 'bluetoothIndicator',
        className: cls.bluetoothIndicator,
        animationData: bluetoothAnimationData,
        loop: true,
        autoplay: true,
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