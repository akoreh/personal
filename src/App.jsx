import React from "react";
import { TimelineLite, TweenLite } from "gsap";

import TopBar from "./components/TopBar/TopBar";
import Desktop from "./components/Desktop/Desktop";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground";
import Dock from "./components/Dock/Dock";

import backgrounds from "./backgrounds.js";
import {
  IS_DEV,
  L_S_TIME,
  L_S_FADE_DURATION,
  LOADING_SCROLL_DURATION
} from "./constants";

import cls from "./App.module.scss";

function App() {
  const showCursor = () => {
    TweenLite.set(document.body, {
      cursor: "",
      delay: IS_DEV ? 0 : LOADING_SCROLL_DURATION
    });
  };

  const hideLoadingScreen = () => {
    const loadingScreen = document.querySelector("#loading");
    const loadingScreenTimeline = new TimelineLite();

    loadingScreenTimeline
      .to(
        loadingScreen,
        L_S_FADE_DURATION,
        { autoAlpha: 0 },
        `+=${IS_DEV ? 0.2 : L_S_TIME}`
      )
      .set(loadingScreen, { display: "none" });
  };

  React.useEffect(() => {
    showCursor();
    hideLoadingScreen();
  }, []);

  return (
    <div className={cls.app}>
      <TopBar />
      <Desktop />
      <ParallaxBackground layers={backgrounds.parallax.firewatch1.layers} />
      <div className={cls.dock}>
        <Dock />
      </div>
    </div>
  );
}

export default App;
