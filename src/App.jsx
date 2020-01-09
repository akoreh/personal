import React, { useEffect } from 'react';
import { TweenMax } from 'gsap';

function App() {
  const isDev = true;

  const hideLoadingScreen = () => {
    TweenMax.set(document.querySelector('#loading'), {delay: isDev ? .2 : 1.5, display: 'none'})
  };

  useEffect(hideLoadingScreen)

  return <h1>Andrei Koreh</h1>
}

export default App;
