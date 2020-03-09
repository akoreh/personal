/* eslint-disable react-hooks/exhaustive-deps */
import React, { createRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TweenMax, Expo } from 'gsap';
import moment from 'moment';

import TopBarIcons from './TopBarIcons';
import WindowButtons from '../WindowButtons/WindowButtons';

import { C } from '../../util';
import { IS_DEV, L_S_TIME, SCROLL_TO_TOP_DURATION } from '../../constants';
import { selectMaximizedWindow } from '../../redux/windows/windows.selectors';
import { closeWindow, toggleWindowZoom } from '../../redux/windows/windows.actions';

import cls from './TopBar.module.scss';

const TopBar = ({ maximizedWindow, closeWindow, toggleWindowZoom}) => {
    const topBarRef = createRef();
    const [systemTime, setSystemTime] = useState(new Date());

    function animateTopBar () {
        const delay = L_S_TIME + SCROLL_TO_TOP_DURATION;
        const target = topBarRef.current;
        
        if (IS_DEV) {
            TweenMax.set(target, {y: 0});
        } else {
            TweenMax.to(target, 1, {y: 0, ease: Expo.easeOut, delay});
        }
    };

    function updateSystemTime() {
        const now = new Date();

        if (now.getMinutes() !== systemTime.getMinutes()) {
            setSystemTime(now);
        }
    }

    useEffect(() => {
        const sysTimeInterval = setInterval(updateSystemTime, 5000);

        animateTopBar();

        return () => clearInterval(sysTimeInterval);
    }, []);

    return <nav className={cls.topBar} ref={topBarRef}>
        <div className={cls.left}>
            {maximizedWindow && (
                <WindowButtons 
                    onClose={closeWindow.bind(null, maximizedWindow.id)}
                    onToggleZoom={toggleWindowZoom.bind(null, maximizedWindow.id)}
                />
            )}
            <h1 className={cls.brand}>
                {!maximizedWindow && 'Koreh'}
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
    maximizedWindow: selectMaximizedWindow,
});

const mapDispatchToProps = dispatch => ({
    closeWindow: id => dispatch(closeWindow(id)),
    toggleWindowZoom: id => dispatch(toggleWindowZoom(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
