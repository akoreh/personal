import React, { createRef, useEffect } from 'react';
import lottie from 'lottie-web';

const AnimatedIcon = ({
    key,
    autoplay, 
    playOnHover,
    speed = 1, 
    startDelay = 0,
    className,
    style,
    ...props 
}) => {
    const base = createRef();
    let animation;

    function initAnimation () {
        animation = lottie.loadAnimation({
            container: base.current,
            ...props,
            autoplay: false,
        });

        animation.setSpeed(speed);

        if (autoplay) {
            setTimeout(playAnimation, startDelay * 1000);
        }
    };

    function playAnimation(direction = 1) {
        animation.setDirection(direction);
        animation.play();
    }

    useEffect(initAnimation, []);

    return <div 
        id={`lottie_${key}`} 
        className={className} 
        style={style} 
        ref={base}
        onMouseEnter={() => playOnHover && playAnimation()}
        onMouseLeave={() => playOnHover && playAnimation(-1)}
    />;
};

export default AnimatedIcon;
