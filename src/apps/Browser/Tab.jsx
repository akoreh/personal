import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { C } from "../../util";

import cls from "./Tab.module.scss";

const Tab = ({ tab, isActive, onClick, onClose }) => {
  const [isCloseHovered, setIsCloseHovered] = React.useState(false);

  return (
    <div className={C(cls.tab, isActive && cls.active)} onClick={onClick}>
      <span className={cls.tabLabel}>{tab.title}</span>
      <FontAwesomeIcon
        className={cls.closeIcon}
        icon={isCloseHovered ? faTimesCircle : faTimes}
        onMouseEnter={setIsCloseHovered.bind(null, true)}
        onMouseLeave={setIsCloseHovered.bind(null, false)}
        onClick={evt => {
          evt.stopPropagation();
          onClose();
        }}
      />
    </div>
  );
};

export default Tab;
