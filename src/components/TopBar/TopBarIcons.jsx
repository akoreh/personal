import React from 'react';

import Icon from '../Icons/Icon';

//! Assets
import batteryAnimationData from '../../assets/anim/battery.json';
import wifiAnimationData from '../../assets/anim/wifi.json';

import EmailIcon from '../../assets/img/icons/email.svg';
import GitHubIcon from '../../assets/img/icons/github.svg';
import LinkedInIcon from '../../assets/img/icons/linkedin.svg';

import { EMAIL, LINKED_IN, GIT_HUB } from '../../constants';

import cls from './TopBarIcons.module.scss';

const icons = [
    {
        key: 'topBarEmailIcon',
        className: cls.emailIcon,
        src: EmailIcon,
        href: `mailto:${EMAIL}`,
        target: '_self',
        onClick: openLink
    },
    {
        key: 'topBarGitHubIcon',
        className: cls.gitHubIcon,
        src: GitHubIcon,
        href: GIT_HUB,
        onClick: openLink
    },
    {
        key: 'topBarLinkedInIcon',
        className: cls.linkedInIcon,
        src: LinkedInIcon,
        href: LINKED_IN,
        onClick: openLink
    },
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

function openLink({href, target}) {
    window.open(href, target);
}

const TopBarIcons = () => (
    <div className={cls.topBarIcons}>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </div>
);

export default TopBarIcons;