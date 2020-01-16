import React, { useEffect } from 'react';
import { TimelineMax, TweenMax } from 'gsap';

import Desktop from './components/Desktop/Desktop';

import { IS_DEV, LOADING_SCREEN_TIME, LOADING_SCREEN_FADE_DURATION, SCROLL_TO_TOP_DURATION} from './constants';

import cls from './App.module.scss';
import TopBar from './components/TopBar/TopBar';


function App() {
  const showCursor = () => {
    const delay = LOADING_SCREEN_TIME + LOADING_SCREEN_FADE_DURATION + SCROLL_TO_TOP_DURATION;
    TweenMax.set(document.body, {cursor: '', delay: IS_DEV ? 0 : delay});
};

  const hideLoadingScreen = () => {
    const loadingScreen = document.querySelector('#loading');
    const loadingScreenTimeline = new TimelineMax();

    loadingScreenTimeline
      .to(loadingScreen, LOADING_SCREEN_FADE_DURATION, {autoAlpha: 0}, `+=${IS_DEV ? .2 : LOADING_SCREEN_TIME}`)
      .set(loadingScreen, {display: 'none'});
  };

  useEffect(() => {
    showCursor();
    hideLoadingScreen();
  }, [])

  return <div className={cls.app}>
    <TopBar />
    <Desktop />
  </div>
}

export default App;
