import React, { useEffect } from 'react';
import { TimelineMax } from 'gsap';

import Desktop from './components/Desktop/Desktop';

import { LOADING_SCREEN_TIME, LOADING_SCREEN_FADE_DURATION, IS_DEV } from './constants';

import cls from './App.module.scss';
import TopBar from './components/TopBar/TopBar';

function App() {

  const hideLoadingScreen = () => {
    const loadingScreen = document.querySelector('#loading');
    const loadingScreenTimeline = new TimelineMax();

    loadingScreenTimeline
      .to(loadingScreen, LOADING_SCREEN_FADE_DURATION, {autoAlpha: 0}, `+=${IS_DEV ? .2 : LOADING_SCREEN_TIME}`)
      .set(loadingScreen, {display: 'none'});
  };

  useEffect(hideLoadingScreen)

  return <div className={cls.app}>
    <TopBar />
    <Desktop />
  </div>
}

export default App;
