import React from 'react';
import { TweenLite, Expo } from 'gsap';

import DockIcons from './DockIcons';

import { IS_DEV, LOADING_SCROLL_DURATION } from '../../constants';

import cls from './Dock.module.scss';

const Dock = () => {
	const dockRef = React.useRef();

	const animateDock = () => {
		const target = dockRef.current;

		if (IS_DEV) {
			TweenLite.set(target, { y: 0 });
		} else {
			TweenLite.to(target, 1, {
				y: 0,
				ease: Expo.easeOut,
				delay: LOADING_SCROLL_DURATION - 0.5
			});
		}
	};

	React.useEffect(animateDock, []);

	return (
		<div className={cls.dock} ref={dockRef}>
			<DockIcons />
		</div>
	);
};

export default Dock;
