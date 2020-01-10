import React from 'react';

import ParallaxLayer from './ParallaxLayer/ParallaxLayer';

import cls from './ParallaxBackground.module.scss';

const ParallaxBackground = ({layers}) => (
    <div className={cls.parallaxBackground}>
        <div className={cls.parallax}>
            {layers.map((src, index) => {
                const x = (layers.length - 1 - index) / 2;
                return <ParallaxLayer 
                    key={src}
                    src={src}
                    zTranslate={-100 * x}
                    scale={x + 1}
                />;
            })}
            <div className={cls.cover}/>
        </div>
    </div>
);

export default ParallaxBackground;
