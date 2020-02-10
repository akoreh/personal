import React from 'react';

import Icon from '../Icons/Icon';

import folderAnimationData from '../../assets/anim/folder.json'; 
import BrowserIcon from '../../assets/img/icons/browser.svg';

import cls from './DesktopIcons.module.scss';

const icons = [
    {
        label: 'Projects',
        key: 'projectsFolderIcon',
        className: cls.folderIcon,
        animationData: folderAnimationData,
        loop: false,
        autoplay: false,
        speed: 0.5,
        content: <div>Projects</div>,
    },
    {
        label: 'Internet',
        key: 'internetIcon',
        className: cls.browserIcon,
        src: BrowserIcon,
        content: <div>Internet</div>,
    }
];

const DesktopIcons = () => (
    <div className={cls.desktopIcons}>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </div>
);

export default DesktopIcons;