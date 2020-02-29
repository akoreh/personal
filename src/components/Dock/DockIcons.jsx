import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Icon from '../Icons/Icon';

import BrowserIcon from '../../assets/img/icons/browser.svg';
import CalculatorIcon from '../../assets/img/icons/calculator.svg';
import EmailIcon from '../../assets/img/icons/email.svg';
import GitHubIcon from '../../assets/img/icons/github.svg';
import LinkedInIcon from '../../assets/img/icons/linkedin.svg';
import settingsAnimationData from '../../assets/anim/settings.json';

import { appOpts as calculatorAppOpts} from '../../apps/Calculator/Calculator';

import { openWindow } from '../../redux/windows/windows.actions';

import { EMAIL, LINKED_IN, GIT_HUB } from '../../constants';

import { C } from '../../util';

import cls from './DockIcons.module.scss';

const DockIcons = ({ openWindow }) => {
    const openLink = ({href, target}) => window.open(href, target);
    
    const icons = [
        {
            key: 'dockInternet',
            className: C(cls.icon, cls.browserIcon),
            src: BrowserIcon,
            onClick: () => {}
        },
        {
            key: 'dockCalculator',
            className: C(cls.icon, cls.calculatorIcon),
            src: CalculatorIcon,
            onClick: openWindow.bind(null, calculatorAppOpts)
        },
        {
            key: 'dockEmail',
            className: cls.icon,
            src: EmailIcon,
            href: `mailto:${EMAIL}`,
            target: '_self',
            onClick: openLink
        },
        {
            key: 'dockGitHub',
            className: cls.icon,
            src: GitHubIcon,
            href: GIT_HUB,
            onClick: openLink
        },
        {
            key: 'dockLinkedIn',
            className: cls.icon,
            src: LinkedInIcon,
            href: LINKED_IN,
            onClick: openLink
        },
        {
            key: 'dockSettings',
            className: C(cls.icon, cls.settingsIcon),
            animationData: settingsAnimationData,
            loop: true,
            autoplay: true,
            speed: 0.3,
        },
    ];

    return <Fragment>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </Fragment>
};

const mapDispatchToProps = dispatch => ({
    openWindow: windowOpts => dispatch(openWindow(windowOpts)),
});

export default connect(null, mapDispatchToProps)(DockIcons);