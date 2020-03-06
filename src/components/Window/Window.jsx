import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

import WindowButtons from '../WindowButtons/WindowButtons';

import { closeWindow, toggleWindowMaximized, setWindowFocused, updateWindowDimensions } from '../../redux/windows/windows.actions';

import { C, getRandomInt } from '../../util';

import cls from './Window.module.scss';

const Window = ({ 
    id, 
    title,
    type, 
    width,
    height,
    children, 
    isMaximized, 
    isFocused,
    //METHODS
    closeWindow, 
    toggleWindowMaximized, 
    setWindowFocused,
    updateWindowDimensions,
}) => {
    const dragHandleId = `window__handle-${id}`;
    const resizeHandleId = `window_resize_Handle-${id}`;
    const widthNum = calculateDimension(width, window.innerWidth);
    const heightNum = calculateDimension(height, window.innerHeight);
    const centerX  = (window.innerWidth / 2 - widthNum / 2) + getRandomInt(-50, 150);

    /**
     * Converts dimension values like '50%' or '50vh' to actual pixel value
     * based on a parent dimension
     * @param {string} dimension 
     * @param {number} parentDimension 
     */
    function calculateDimension(dimension, parentDimension) {
        if (typeof dimension === 'number') {
            return dimension;
        }

        if (dimension.indexOf('px') !== -1) {
            return parseInt(dimension.replace('px', ''));
        }

        dimension = parseInt(dimension.replace('vw', '').replace('vh', ''));

        return (dimension / 100) * parentDimension;
    }
    
    function setFocused() {
        if (!isFocused) {
            setWindowFocused(id);
        }
    }

    function onResize(_, { size }) {
        updateWindowDimensions(id, size.width, size.height);
    };

    return <Draggable handle={`#${dragHandleId}`} defaultPosition={{x: centerX, y: getRandomInt(0, 150)}} onStart={setFocused}>
        <ResizableBox
            className={C(
                cls.window, 
                isMaximized && cls.maximized, type === 'app' && cls.app,
                isFocused && cls.focused,
            )}
            style={{width, height}}
            handle={<div id={resizeHandleId} className={cls.resizeHandle}></div>}
            width={widthNum}
            height={heightNum}
            minConstraints={[450, 300]}
            onClick={setFocused}
            onResize={onResize}
        >
            <div id={dragHandleId} className={cls.dragHandle}>
                {!isMaximized && <p className={cls.title}>{title}</p>}
            </div>
            {!isMaximized && (
                <div className={cls.buttons}>
                    <WindowButtons onClose={closeWindow.bind(null, id)} onMaximize={toggleWindowMaximized.bind(null, id)}/>
                </div>
            )}
            <div className={cls.content}>
                {children}
            </div>
        </ResizableBox>
    </Draggable>;
};

const mapDispatchToProps = dispatch => ({
    closeWindow: id => dispatch(closeWindow(id)),
    toggleWindowMaximized: id => dispatch(toggleWindowMaximized(id)),
    setWindowFocused: id => dispatch(setWindowFocused(id)),
    updateWindowDimensions: (id, width, height) => dispatch(updateWindowDimensions(id, width, height)),
});

export default connect(null, mapDispatchToProps)(Window);