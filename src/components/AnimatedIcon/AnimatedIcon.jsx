import React, { createRef, useEffect } from 'react';
import lottie from 'lottie-web';

const AnimatedIcon = ({ width, speed, containerStyle, ...props }) => {
    const base = createRef();

    const initAnimation = () => {
        const animation = lottie.loadAnimation({
            container: base.current,
            ...props,
        });

        if (speed) {
            animation.setSpeed(speed);
        }
    };

    useEffect(() => {
        initAnimation();
    }, []);

    return <div id={`lottie_${props.name}`} style={containerStyle} ref={base} />
};

export default AnimatedIcon;
