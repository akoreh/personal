import React from "react";

import TumbleWeed from "../../assets/img/tumbleweed.png";

import cls from "./ComingSoon.module.scss";

const AppComingSoon = () => {
  return (
    <div className={cls.comingSoon}>
      <div
        className={cls.bounce}
        style={{ backgroundImage: `url(${TumbleWeed})` }}
      />
      <div className={cls.pebble} />
      <div className={cls.pebble} />
      <div className={cls.pebble} />
      <h1 className={cls.message}>Coming Soon!</h1>
    </div>
  );
};

export default AppComingSoon;
