import { EMAIL, LINKED_IN, GIT_HUB } from '../../constants';

import EmailIcon from '../../assets/img/icons/email.svg';
import GitHubIcon from '../../assets/img/icons/github.svg';
import LinkedInIcon from '../../assets/img/icons/linkedin.svg';

const socialIcons = [
    {
        href: `mailto:${EMAIL}`,
        icon: EmailIcon,
        alt: "email",
        target: '_self',
        height: '.9rem',
    },
    {
        href: GIT_HUB,
        icon: GitHubIcon,
        alt: "github",
        height: '1rem',
    },
    {
        href: LINKED_IN,
        icon: LinkedInIcon,
        alt: "linkedin",
        height: '1.2rem',
    },
];

export default socialIcons;