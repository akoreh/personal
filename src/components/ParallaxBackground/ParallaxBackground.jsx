import React, { useEffect, createRef } from 'react';
import { TweenMax, TimelineLite } from 'gsap';

import ParallaxLayer from './ParallaxLayer/ParallaxLayer';

import { IS_DEV, SCROLL_TO_TOP_DURATION, LOADING_SCREEN_TIME, LOADING_SCREEN_FADE_DURATION } from '../../constants';

import cls from './ParallaxBackground.module.scss';

const ParallaxBackground = ({layers}) => {
    const parallaxRef = createRef();

    const toggleCursorVisibility = (isVisible) => TweenMax.set(document.body, {cursor: isVisible ? 'auto' : 'none'});

    const scrollToBottom = () => parallaxRef.current.scrollTo(0, parallaxRef.current.clientHeight);

    const scrollToTop = () => {
        if (IS_DEV) {
            TweenMax.to(parallaxRef.current, {scrollTo: {x: 0, y: 0}});
        } else {
            const scrollToTopTimeline = new TimelineLite();
            scrollToTopTimeline
                .to(parallaxRef.current, SCROLL_TO_TOP_DURATION, {scrollTo: {x: 0, y: 0}}, `+=${LOADING_SCREEN_TIME + LOADING_SCREEN_FADE_DURATION}`);
        }
    }
    
    useEffect(() => {
        toggleCursorVisibility(false);
        scrollToBottom();
        scrollToTop();

        setTimeout(() => toggleCursorVisibility(true), 
            (LOADING_SCREEN_TIME + LOADING_SCREEN_FADE_DURATION + SCROLL_TO_TOP_DURATION) * 1000
        );
    }, []);

    return <div className={cls.parallaxBackground}>
        <div className={cls.parallax} ref={parallaxRef}>
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
    </div>;
}

export default ParallaxBackground;
