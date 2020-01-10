import React, { useEffect } from 'react';
import { TweenMax } from 'gsap';

import Desktop from './components/Desktop/Desktop';

import cls from './App.module.scss';

function App() {
  const isDev = true;

  const hideLoadingScreen = () => {
    TweenMax.set(document.querySelector('#loading'), {delay: isDev ? .2 : 1.5, display: 'none'})
  };

  useEffect(hideLoadingScreen)

  return <div className={cls.app}>
    <Desktop />
  </div>
}

export default App;
