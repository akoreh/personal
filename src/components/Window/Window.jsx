import React, { createRef, useState } from 'react';
import Draggable from 'react-draggable';

import { C } from '../../util';

import cls from './Window.module.scss';

const Window = ({ id, style, children }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const handleId = `window__handle-${id}`;

    const onToggleFulscreen = () => setIsFullscreen(!isFullscreen);

    return <Draggable handle={`#${handleId}`} defaultPosition={{x: window.innerWidth / 3.5, y: window.innerHeight / 5}}>
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