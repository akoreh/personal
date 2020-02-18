import React, { useState } from 'react';
import Draggable from 'react-draggable';

import { C, percentageOfValue } from '../../util';

import cls from './Window.module.scss';

const Window = ({ id, style, children }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const handleId = `window__handle-${id}`;
    const centerCoordinates = {
        x: calculateCenterCoordinate(style.width, window.innerWidth),
        y: calculateCenterCoordinate(style.height, window.innerHeight)
    };

    const onToggleFulscreen = () => setIsFullscreen(!isFullscreen);

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

    return <Draggable handle={`#${handleId}`} defaultPosition={centerCoordinates}>
        <div className={C(cls.window, isFullscreen ? cls.fullscreen : '')} style={style}>
            <div id={handleId} className={cls.dragHandle}/>
            <div className={cls.topBar}>
                <div className={cls.button} />
                <div className={cls.button} />
                <div className={cls.button} onClick={onToggleFulscreen}/>
            </div>
            <div className={cls.content}>
                {children}
            </div>
        </div>
    </Draggable>;
};

export default Window;