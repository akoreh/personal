/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TweenLite, Expo } from 'gsap';
import moment from 'moment';

import TopBarIcons from './TopBarIcons';
import WindowButtons from '../WindowButtons/WindowButtons';

import { C } from '../../util';
import { IS_DEV, L_S_TIME, SCROLL_TO_TOP_DURATION } from '../../constants';
import { selectZoomedWindow } from '../../redux/windows/windows.selectors';
import { closeWindow, toggleWindowZoom, toggleWindowMinimized } from '../../redux/windows/windows.actions';

import cls from './TopBar.module.scss';

const TopBar = ({ zoomedWindow, closeWindow, minimizeWindow, toggleWindowZoom}) => {
    const topBarRef = useRef();
    const [systemTime, setSystemTime] = useState(new Date());

    function animateTopBar () {
        const delay = L_S_TIME + SCROLL_TO_TOP_DURATION;
        const target = topBarRef.current;
        
        if (IS_DEV) {
            TweenLite.set(target, {y: 0});
        } else {
            TweenLite.to(target, 1, {y: 0, ease: Expo.easeOut, delay});
        }
    };

    function updateSystemTime() {
        const now = new Date();

        if (now.getMinutes() !== systemTime.getMinutes()) {
            setSystemTime(now);
        }
    }

    function onClose() {
        TweenLite.to(document.getElementById(`window_${zoomedWindow.id}`), .2, {autoAlpha: 0})
                 .eventCallback('onComplete', closeWindow.bind(null, zoomedWindow.id));
    }

    useEffect(() => {
        const sysTimeInterval = setInterval(updateSystemTime, 5000);

        animateTopBar();

        return () => clearInterval(sysTimeInterval);
    }, []);

    return <nav className={cls.topBar} ref={topBarRef}>
        <div className={cls.left}>
            {zoomedWindow && (
                <WindowButtons 
                    onClose={onClose}
                    onMinimize={minimizeWindow.bind(null, zoomedWindow.id)}
                    onToggleZoom={toggleWindowZoom.bind(null, zoomedWindow.id)}
                />
            )}
            <h1 className={cls.brand}>
                {!zoomedWindow && 'Koreh'}
            </h1>
        </div>
        <div className={cls.center}>
        </div>
        <div className={cls.right}>
            <TopBarIcons />
            <span className={C(cls.time, 'no-select')}>{moment(systemTime).format('ddd Do MMM HH:mm')}</span>
        </div>
    </nav>;
};

const mapStateToProps = createStructuredSelector({
    zoomedWindow: selectZoomedWindow,
});

const mapDispatchToProps = dispatch => ({
    closeWindow: id => dispatch(closeWindow(id)),
    minimizeWindow: id => dispatch(toggleWindowMinimized(id)),
    toggleWindowZoom: id => dispatch(toggleWindowZoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
