import React from 'react';

const SocialIcon = ({icon, href, alt, target, height}) => (
    <a href={href} target={target || '_blank'} rel="noopener noreferrer">
        <img style={{height}} src={icon} alt={alt}></img>
    </a>
);

export default SocialIcon;
