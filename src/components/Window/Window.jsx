import React from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";
import { ResizableBox } from "react-resizable";
import { TimelineLite, TweenLite } from "gsap";

import WindowButtons from "../WindowButtons/WindowButtons";

import {
  closeWindow,
  toggleWindowMinimized,
  toggleWindowZoom,
  setWindowFocused,
  updateWindowDimensions
} from "../../redux/windows/windows.actions";

import { C } from "../../util";

import cls from "./Window.module.scss";

const Window = ({
  closeWindow,
  minimizeWindow,
  toggleWindowZoom,
  setWindowFocused,
  updateWindowDimensions,
  ...props
}) => {
  const {
    id,
    elementId,
    dragHandleId,
    resizeHandleId,
    title,
    type,
    width,
    height,
    x,
    y,
    isZoomed,
    isFocused
  } = props.window;

  function setFocused() {
    if (!isFocused) {
      setWindowFocused(id);
    }
  }

  function onResize(_, { size }) {
    const { width, height } = size;
    updateWindowDimensions(id, { width, height });
  }

  function onClose(id) {
    TweenLite.to(document.getElementById(elementId), 0.2, {
      autoAlpha: 0,
      y: -height * 1.5
    }).eventCallback("onComplete", closeWindow.bind(null, id));
  }

  function onMinimize(id) {
    TweenLite.to(document.getElementById(elementId), 0.3, {
      width: 0,
      y: height * 2,
      x: window.innerWidth / 2
    }).eventCallback("onComplete", minimizeWindow.bind(null, id));
  }

  function onZoomIn(id) {
    TweenLite.to(document.getElementById(elementId), 0.2, {
      height: "100%",
      width: "100%",
      x: 0,
      y: 0,
      top: "30px"
    }).eventCallback("onComplete", toggleWindowZoom.bind(null, id));
  }

  function animateWindowOpening() {
    const windowElement = document.getElementById(elementId);
    const timeline = new TimelineLite();

    timeline.set(windowElement, { opacity: 1 });
    timeline.from(windowElement, 1, {
      y: "-100%",
      ease: "elastic.out(1.5, 1.5)"
    });
  }

  React.useEffect(animateWindowOpening, []);

  return (
    <Draggable
      handle={`#${dragHandleId}`}
      defaultPosition={{ x, y }}
      onStart={setFocused}
    >
      <ResizableBox
        id={elementId}
        className={C(
          cls.window,
          isZoomed && cls.zoomed,
          isFocused && cls.focused,
          type === "app" && cls.app
        )}
        style={{ width, height }}
        width={width}
        height={height}
        minConstraints={[450, 300]}
        handle={() => (
          <div id={resizeHandleId} className={cls.resizeHandle}></div>
        )}
        onClick={setFocused}
        onResize={onResize}
      >
        {!isZoomed && (
          <React.Fragment>
            <div id={dragHandleId} className={cls.dragHandle}>
              <p className={cls.title}>{title}</p>
            </div>
            <div className={cls.buttons}>
              <WindowButtons
                onClose={onClose.bind(null, id)}
                onMinimize={onMinimize.bind(null, id)}
                onToggleZoom={onZoomIn.bind(null, id)}
              />
            </div>
          </React.Fragment>
        )}
        <div className={cls.content}>{props.children}</div>
      </ResizableBox>
    </Draggable>
  );
};

const mapDispatchToProps = dispatch => ({
  closeWindow: id => dispatch(closeWindow(id)),
  minimizeWindow: id => dispatch(toggleWindowMinimized(id)),
  toggleWindowZoom: id => dispatch(toggleWindowZoom(id)),
  setWindowFocused: id => dispatch(setWindowFocused(id)),
  updateWindowDimensions: (id, width, height) =>
    dispatch(updateWindowDimensions(id, width, height))
});

export default connect(null, mapDispatchToProps)(Window);
