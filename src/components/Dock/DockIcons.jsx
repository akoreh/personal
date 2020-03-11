import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { find, get } from 'lodash';

import Icon from '../Icons/Icon';

import BrowserIcon from '../../assets/img/icons/browser.svg';
import CalculatorIcon from '../../assets/img/icons/calculator.svg';
import EmailIcon from '../../assets/img/icons/email.svg';
import GitHubIcon from '../../assets/img/icons/github.svg';
import LinkedInIcon from '../../assets/img/icons/linkedin.svg';
import settingsAnimationData from '../../assets/anim/settings.json';

import { appOpts as calculatorAppOpts} from '../../apps/Calculator/Calculator';
import { appOpts as browserAppOpts } from '../../apps/Browser/Browser';
import { appOpts as settingsAppOpts } from '../../apps/Settings/Settings';
import { folderIcon } from '../../apps/Folder/Folder';

import { openWindowAndSetFocused, toggleWindowMinimized } from '../../redux/windows/windows.actions';
import { selectOpenApps, selectOpenFolders } from '../../redux/windows/windows.selectors';

import { EMAIL, LINKED_IN, GIT_HUB } from '../../constants';

import { C } from '../../util';

import cls from './DockIcons.module.scss';

const dockFolderIcon = {...folderIcon, autoplay: true, loop: false, playOnHover: false};

const DockIcons = ({ openApps, openFolders, openWindowAndSetFocused, maximizeWindow }) => {
    const [icons, setIcons] = useState([]);

    useEffect(() => setIcons(getIcons(onAppClick, onLinkClick)), []);


    function appIsRunning(appId) {
        return appId ? find(openApps, {id: appId}) : false;
    }

    function onAppClick() {
        appIsRunning(this.appOpts.id) ? maximizeWindow(this.appOpts.id) : openWindowAndSetFocused(this.appOpts);
    }

    function onLinkClick() {
        window.open(this.href, this.target)
    }

    return <Fragment>
        {
            icons.map((icon, index) => (
                <div 
                    key={index} 
                    className={C(cls.dockIcon, appIsRunning(get(icon, ['appOpts', 'id'])) && cls.appRunning)}
                >
                    <div className={cls.title}>{get(icon, ['appOpts', 'title'], icon.title)}</div>
                    <Icon {...icon} />
                </div>
            ))
        }
        {
            openFolders.length > 0 && <div className={cls.foldersSeparator} />
        }
        {
            openFolders.map((folder) => (
                <div key={folder.id} className={cls.dockIcon}>
                    <div className={cls.title}>{folder.title}</div>
                    <Icon 
                        className={C(cls.icon, cls.folderIcon)} 
                        onClick={maximizeWindow.bind(null, folder.id)}
                        {...dockFolderIcon}
                    />
                </div>
            ))
        }
    </Fragment>
};

const mapStateToProps = createStructuredSelector({
    openApps: selectOpenApps,
    openFolders: selectOpenFolders,
});

const mapDispatchToProps = dispatch => ({
    openWindowAndSetFocused: windowOpts => dispatch(openWindowAndSetFocused(windowOpts)),
    maximizeWindow: id => dispatch(toggleWindowMinimized(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DockIcons);


function getIcons(onAppClick, onLinkClick) {
    return [
        {
            className: C(cls.icon, cls.browserIcon),
            src: BrowserIcon,
            appOpts: browserAppOpts,
            onClick: onAppClick,
        },
        {
            className: C(cls.icon, cls.calculatorIcon),
            src: CalculatorIcon,
            appOpts: calculatorAppOpts,
            onClick: onAppClick,
        },
        {
            title: 'Email',
            className: cls.icon,
            src: EmailIcon,
            href: `mailto:${EMAIL}`,
            target: '_self',
            onClick: onLinkClick,
        },
        {
            title: 'GitHub',
            className: cls.icon,
            src: GitHubIcon,
            href: GIT_HUB,
            onClick: onLinkClick,
        },
        {
            title: 'LinkedIn',
            className: cls.icon,
            src: LinkedInIcon,
            href: LINKED_IN,
            onClick: onLinkClick,
        },
        {
            className: C(cls.icon, cls.settingsIcon),
            animationData: settingsAnimationData,
            loop: false,
            autoplay: false,
            speed: 1,
            playOnHover: true,
            appOpts: settingsAppOpts,
            onClick: onAppClick,
        },
    ];
}