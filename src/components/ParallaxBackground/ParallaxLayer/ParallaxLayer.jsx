import React from 'react';

import cls from './ParallaxLayer.module.scss';

const ParallaxLayer = ({ src, style }) => (
	<div className={cls.parallaxLayer} style={style}>
		<img src={src} alt="parallax layer" />
	</div>
);

export default ParallaxLayer;
