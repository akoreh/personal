/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import debounce from 'debounce';

import ParallaxLayer from './ParallaxLayer/ParallaxLayer';

import { IS_DEV, SCROLL_TO_TOP_DURATION, L_S_TIME, L_S_FADE_DURATION } from '../../constants';

import cls from './ParallaxBackground.module.scss';

const ParallaxBackground = ({layers}) => {
    const parallaxContainerRef = useRef();
    const parallaxRef = useRef();

    const scrollToBottom = () => parallaxRef.current.scrollTo(0, parallaxRef.current.clientHeight);

    const scrollToTop = () => {
        const target =  parallaxRef.current;

        if (IS_DEV) {
            TweenMax.set(target, {scrollTo: {x: 0, y: 0}});
        } else {
            const delay = L_S_TIME + L_S_FADE_DURATION;
            TweenMax.to(target, SCROLL_TO_TOP_DURATION, {scrollTo: {x: 0, y: 0}, delay});
        }
    }

    const disableScroll = () => {
        parallaxContainerRef.current.style.pointerEvents = 'none';
    };

    const enableScroll = () => {
        parallaxContainerRef.current.style.pointerEvents = 'all';
    };
    
    useEffect(() => {
        const disableScrollDebounced = debounce(disableScroll, 300);
        scrollToBottom();
        scrollToTop();

        const scrollListener = window.addEventListener('wheel', () => {
            enableScroll();
            disableScrollDebounced();
        });

        return () => window.removeEventListener('wheel', scrollListener);
    }, []);

    return <div className={cls.parallaxBackground} ref={parallaxContainerRef}>
        <div className={cls.parallax} ref={parallaxRef}>
            {layers.map(layer => <ParallaxLayer 
                key={layer.src}
                {...layer}
            />)}
            <div className={cls.cover}/>
        </div>
    </div>;
}

export default ParallaxBackground;
