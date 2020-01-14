import React from 'react';

const TopBarSocialIcon = ({icon, href, alt, target, height}) => (
    <a href={href} target={target || '_blank'} rel="noopener noreferrer">
        <img style={{height}} src={icon} alt={alt}></img>
    </a>
);

export default TopBarSocialIcon;
