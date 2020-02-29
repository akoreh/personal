import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

import WindowButtons from '../WindowButtons/WindowButtons';

import { closeWindow, toggleWindowMaximized } from '../../redux/windows/windows.actions';

import { C, percentageOfValue } from '../../util';

import cls from './Window.module.scss';

const Window = ({ id, type, style, children, isMaximized, closeWindow, toggleWindowMaximized }) => {
    const handleId = `window__handle-${id}`;
    const centerCoordinates = {
        x: calculateCenterCoordinate(style.width, window.innerWidth),
        y: calculateCenterCoordinate(style.height, window.innerHeight)
    };

    function calculateCenterCoordinate (size, parentDimension) {
        if (size.indexOf('vh') !== -1 || size.indexOf('vw') !== -1) {
            size = size.replace('vh', '%');
            size = size.replace('vw', '%');
        }

        if (size.indexOf('%') !== -1) {
            size = percentageOfValue(size, parentDimension);
        }

        return parentDimension / 2 - size / 2;
    }

    return <Draggable 
        handle={`#${handleId}`} 
        defaultPosition={centerCoordinates}
    >
        <div 
            className={C(cls.window, isMaximized && cls.maximized, type === 'app' && cls.app)} 
            style={style}
        >
            <div id={handleId} className={cls.dragHandle}/>
            {!isMaximized && (
                <div className={cls.buttons}>
                    <WindowButtons onClose={closeWindow.bind(null, id)} onMaximize={toggleWindowMaximized.bind(null, id)}/>
                </div>
            )}
            <div className={cls.content}>
                {children}
            </div>
        </div>
    </Draggable>;
};

const mapDispatchToProps = dispatch => ({
    closeWindow: id => dispatch(closeWindow(id)),
    toggleWindowMaximized: id => dispatch(toggleWindowMaximized(id)),
});

export default connect(null, mapDispatchToProps)(Window);