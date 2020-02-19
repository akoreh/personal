import React, { Fragment } from 'react';

import Icon from '../Icons/Icon';

import EmailIcon from '../../assets/img/icons/email.svg';
import GitHubIcon from '../../assets/img/icons/github.svg';
import LinkedInIcon from '../../assets/img/icons/linkedin.svg';

import { EMAIL, LINKED_IN, GIT_HUB } from '../../constants';

import { C } from '../../util';

import cls from './DockIcons.module.scss';

const icons = [
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
    }
];

function openLink({href, target}) {
    window.open(href, target);
}

const DockIcons = () => (
    <Fragment>
        {icons.map(icon => <Icon key={icon.key} {...icon} />)}
    </Fragment>
);

export default DockIcons;