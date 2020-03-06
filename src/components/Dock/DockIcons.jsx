import React, { Fragment } from 'react';
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

import { openWindowAndSetFocused } from '../../redux/windows/windows.actions';
import { selectOpenApps, selectOpenFolders } from '../../redux/windows/windows.selectors';

import { EMAIL, LINKED_IN, GIT_HUB } from '../../constants';

import { C } from '../../util';

import cls from './DockIcons.module.scss';

const DockIcons = ({ openApps, openFolders, openWindowAndSetFocused }) => {
    const icons = [
        {
            key: 'dockInternet',
            className: C(cls.icon, cls.browserIcon),
            src: BrowserIcon,
            appOpts: browserAppOpts,
            onClick: onAppIconClick,
        },
        {
            key: 'dockCalculator',
            className: C(cls.icon, cls.calculatorIcon),
            src: CalculatorIcon,
            appOpts: calculatorAppOpts,
            onClick: onAppIconClick,
        },
        {
            key: 'dockEmail',
            className: cls.icon,
            src: EmailIcon,
            href: `mailto:${EMAIL}`,
            target: '_self',
            onClick: onLinkClick,
        },
        {
            key: 'dockGitHub',
            className: cls.icon,
            src: GitHubIcon,
            href: GIT_HUB,
            onClick: onLinkClick,
        },
        {
            key: 'dockLinkedIn',
            className: cls.icon,
            src: LinkedInIcon,
            href: LINKED_IN,
            onClick: onLinkClick,
        },
        {
            key: 'dockSettings',
            className: C(cls.icon, cls.settingsIcon),
            animationData: settingsAnimationData,
            loop: true,
            autoplay: true,
            speed: 0.3,
            onClick: () => {},
        },
    ];

    function onLinkClick() {
        window.open(this.href, this.target)
    }

    function onAppIconClick() {
        openWindowAndSetFocused(this.appOpts);
    }

    function iconAppIsRunning(appId) {
        if(!appId) {
            return false;
        }

        return find(openApps, {id: appId});
    }

    return <Fragment>
        {icons.map(icon => {
            return <div className={C(cls.dockIcon, iconAppIsRunning(get(icon, ['appOpts', 'id'])) && cls.appRunning)}>
                <Icon key={icon.key} {...icon} />
            </div>
        })}
    </Fragment>
};

const mapStateToProps = createStructuredSelector({
    openApps: selectOpenApps,
    openFolders: selectOpenFolders,
});

const mapDispatchToProps = dispatch => ({
    openWindowAndSetFocused: windowOpts => dispatch(openWindowAndSetFocused(windowOpts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DockIcons);