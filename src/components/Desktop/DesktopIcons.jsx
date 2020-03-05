import React from 'react';
import { connect } from 'react-redux';

import Icon from '../Icons/Icon';

import { openWindowAndSetFocused } from '../../redux/windows/windows.actions';
import { openTab } from '../../redux/browser/browser.actions';
import { appOpts as folderAppOpts, folderIcon} from '../../apps/Folder/Folder';

import BrowserIcon from '../../assets/img/icons/browser.svg';

import cls from './DesktopIcons.module.scss';

const DesktopIcons = ({ openWindowAndSetFocused, openTab }) => {
    const icons = [
        {
            ...folderIcon,
            id: 'projectsFolder',
            label: 'Projects',
            className: cls.folderIcon,
            onClick: openFolder,
        },
        {
            ...folderIcon,
            id: 'uiuxfolder',
            label: 'UI/UX',
            className: cls.folderIcon,
            onClick: openTab.bind(null, {
                title: 'UI/UX',
                content: <div>
                    <h1>UI UX</h1>
                </div>,
            }),
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
    openTab: tabOptions => dispatch(openTab(tabOptions)),
});

export default connect(null, mapDispatchToProps)(DesktopIcons);