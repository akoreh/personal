import React from 'react';

import cls from './ParallaxLayer.module.scss';

const ParallaxLayer = ({src, zTranslate, scale}) => (
    <div className={cls.parallaxLayer} style={{transform: `translateZ(${zTranslate}px) scale(${scale})`}}>
        <img src={src} alt="parallax layer"/>
    </div>
);

export default ParallaxLayer;