import React from 'react';

import AnimatedIcon from './AnimatedIcon';
import SVGIcon from './SVGIcon';

import cls from './Icon.module.scss';

const Icon = props => (
    <div 
        className={cls.icon} 
        style={{cursor: typeof props.onClick === 'function' ? 'pointer' : 'default'}} 
        onClick={() => props.onClick(props)}
        
    >
        {
            props.animationData ? 
            <AnimatedIcon {...props} /> : 
            <SVGIcon {...props}/>
        }
        {props.label && <span className={cls.label}>{props.label}</span>}
    </div>
);

export default Icon;

