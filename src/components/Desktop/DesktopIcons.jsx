import React from 'react';
import { connect } from 'react-redux';

import Icon from '../Icons/Icon';

import { openWindowAndSetFocused } from '../../redux/windows/windows.actions'; 
import { appOpts as folderAppOpts, folderIcon} from '../../apps/Folder/Folder';

import cls from './DesktopIcons.module.scss';

const DesktopIcons = ({ openWindowAndSetFocused }) => {
    const icons = [
        {
            ...folderIcon,
            label: 'Projects',
            id: 'projectsFolder',
            className: cls.folderIcon,
            onClick: openFolder,
        },
    ];

    function openFolder() {
        const { id, label: title } = this;

        openWindowAndSetFocused({id, title, ...folderAppOpts});
    }

    return <div className={cls.desktopIcons}>
        {icons.map(icon => <Icon key={icon.id} {...icon} />)}
    </div>
};

const mapDispatchToProps = dispatch => ({
    openWindowAndSetFocused: appOpts => dispatch(openWindowAndSetFocused(appOpts)),
});

export default connect(null, mapDispatchToProps)(DesktopIcons);