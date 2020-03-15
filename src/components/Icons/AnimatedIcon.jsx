import React from 'react';
import lottie from 'lottie-web';

const AnimatedIcon = ({ key, autoplay, playOnHover, speed = 1, startDelay = 0, className, style, ...props }) => {
	const base = React.useRef();
	const [animation, setAnimation] = React.useState();

	function loadAnimation() {
		setAnimation(
			lottie.loadAnimation({
				container: base.current,
				...props,
				autoplay: false
			})
		);
	}

	function initAnimation() {
		if (!animation) {
			return;
		}

		animation.setSpeed(speed);

		if (autoplay) {
			setTimeout(playAnimation, startDelay * 1000);
		}
	}

	function playAnimation(direction = 1) {
		animation.setDirection(direction);
		animation.play();
	}

	React.useEffect(loadAnimation, []);
	React.useEffect(initAnimation, [animation]);

	return (
		<div
			ref={base}
			className={className}
			style={style}
			onMouseEnter={() => playOnHover && playAnimation()}
			onMouseLeave={() => playOnHover && playAnimation(-1)}
		/>
	);
};

export default AnimatedIcon;
