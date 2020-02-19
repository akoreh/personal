import React from 'react';

import Icon from '../Icons/Icon';

import folderAnimationData from '../../assets/anim/folder.json'; 

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
    }
];

const DesktopIcons = () => (
    <div className={cls.desktopIcons}>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </div>
);

export default DesktopIcons;