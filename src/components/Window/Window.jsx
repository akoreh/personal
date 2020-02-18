import React, { useState } from 'react';

import { C } from '../../util';

import cls from './Window.module.scss';

const Window = ({ style, children }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const onToggleFulscreen = () => setIsFullscreen(!isFullscreen);

    return <div className={C(cls.window, isFullscreen ? cls.fullscreen : '')} style={style}>
        <div className={cls.topBar}>
            <div className={cls.button} />
            <div className={cls.button} />
            <div className={cls.button} onClick={onToggleFulscreen}/>
        </div>
        <div className={cls.content}>
            {children}
        </div>
    </div>;
};

export default Window;