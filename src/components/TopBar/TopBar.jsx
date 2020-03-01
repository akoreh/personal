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
import { closeWindow, toggleWindowMaximized } from '../../redux/windows/windows.actions';

import cls from './TopBar.module.scss';

const TopBar = ({ maximizedWindow, closeWindow, toggleWindowMaximized}) => {
    const topBarRef = createRef();
    const [systemTime, setSystemTime] = useState(new Date());

    const animateTopBar = () => {
        const delay = L_S_TIME + SCROLL_TO_TOP_DURATION;
        const target = topBarRef.current;
        
        if (IS_DEV) {
            TweenMax.set(target, {y: 0});
        } else {
            TweenMax.to(target, 1, {y: 0, ease: Expo.easeOut, delay});
        }
    };

    useEffect(() => {
        animateTopBar();
        // const sysTimeInterval = setInterval(() => setSystemTime(new Date()), 1000);

        // return () => clearInterval(sysTimeInterval);
    }, []);

    return <nav className={cls.topBar} ref={topBarRef}>
        <div className={cls.left}>
            {maximizedWindow && (
                <WindowButtons 
                    onClose={closeWindow.bind(null, maximizedWindow.id)}
                    onMaximize={toggleWindowMaximized.bind(null, maximizedWindow.id)}
                />
            )}
            <h1 className={cls.brand}>
                {!maximizedWindow ? 'Koreh' : maximizedWindow.title}
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
    toggleWindowMaximized: id => dispatch(toggleWindowMaximized(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
