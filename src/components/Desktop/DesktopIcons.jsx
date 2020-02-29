import React from 'react';
import { connect } from 'react-redux';

import Icon from '../Icons/Icon';

import folderAnimationData from '../../assets/anim/folder.json';

import { openWindowAndSetFocused } from '../../redux/windows/windows.actions'; 
import { appOpts as folderAppOpts} from '../../apps/Folder/Folder';

import cls from './DesktopIcons.module.scss';

const DesktopIcons = ({ openWindowAndSetFocused }) => {
    const icons = [
        {
            label: 'Projects',
            key: 'projectsFolder',
            className: cls.folderIcon,
            animationData: folderAnimationData,
            loop: false,
            autoplay: false,
            speed: 0.5,
            onClick: openWindowAndSetFocused.bind(null, {id: 'projectsFolder', title: 'Projects', ...folderAppOpts })
        },
    ];

    return <div className={cls.desktopIcons}>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </div>
};

const mapDispatchToProps = dispatch => ({
    openWindowAndSetFocused: appOpts => dispatch(openWindowAndSetFocused(appOpts)),
});

export default connect(null, mapDispatchToProps)(DesktopIcons);