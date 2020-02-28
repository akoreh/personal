import React, { useContext } from 'react';

import Icon from '../Icons/Icon';

import folderAnimationData from '../../assets/anim/folder.json';

import { windowsContext } from '../../store/WindowsProvider';

import cls from './DesktopIcons.module.scss';
import Folder from '../../apps/Folder/Folder';

const DesktopIcons = () => {
    const { openWindow } = useContext(windowsContext);

    const icons = [
        {
            label: 'Projects',
            key: 'projectsFolder',
            className: cls.folderIcon,
            animationData: folderAnimationData,
            loop: false,
            autoplay: false,
            speed: 0.5,
            onClick: openWindow.bind(null, <Folder />, {
                appIdentifier: 'projectsFolder',
                title: 'Projects',
            })
        },
    ];

    return <div className={cls.desktopIcons}>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </div>
}

export default DesktopIcons;