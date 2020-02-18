import React from 'react';

import cls from './Window.module.scss';

const Window = ({ style, children }) => {
    return <div className={cls.window} style={style}>
        <div className={cls.topBar}>
            <div className={cls.button} />
            <div className={cls.button} />
            <div className={cls.button} />
        </div>
        <div className={cls.content}>
            {children}
        </div>
    </div>;
};

export default Window;