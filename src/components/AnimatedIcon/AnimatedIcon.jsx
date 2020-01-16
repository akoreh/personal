import React, { createRef, useEffect } from 'react';
import lottie from 'lottie-web';

const AnimatedIcon = ({ 
    width, 
    autoplay, 
    speed = 1, 
    startDelay = 0, 
    containerStyle, 
    ...props 
}) => {
    const base = createRef();

    const initAnimation = () => {
        const animation = lottie.loadAnimation({
            container: base.current,
            ...props,
            autoplay: false,
        });

        animation.setSpeed(speed);

        setTimeout(() => {
            if (autoplay) {
                animation.play();
            }
        }, startDelay * 1000);
    };

    useEffect(() => {
        initAnimation();
    }, []);

    return <div id={`lottie_${props.name}`} style={containerStyle} ref={base} />
};

export default AnimatedIcon;
