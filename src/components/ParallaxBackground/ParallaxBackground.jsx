import React, { useEffect, createRef } from 'react';
import { TweenMax } from 'gsap';

import ParallaxLayer from './ParallaxLayer/ParallaxLayer';

import { IS_DEV, SCROLL_TO_TOP_DURATION, LOADING_SCREEN_TIME, LOADING_SCREEN_FADE_DURATION } from '../../constants';

import cls from './ParallaxBackground.module.scss';

const ParallaxBackground = ({layers}) => {
    const parallaxRef = createRef();

    const scrollToBottom = () => parallaxRef.current.scrollTo(0, parallaxRef.current.clientHeight);

    const scrollToTop = () => {
        const target =  parallaxRef.current;

        if (IS_DEV) {
            TweenMax.set(target, {scrollTo: {x: 0, y: 0}});
        } else {
            const delay = LOADING_SCREEN_TIME + LOADING_SCREEN_FADE_DURATION;

            setTimeout(() => {
                TweenMax.to(target, SCROLL_TO_TOP_DURATION, {scrollTo: {x: 0, y: 0}});
            }, delay * 1000);
        }
    }
    
    useEffect(() => {
        scrollToBottom();
        scrollToTop();
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
