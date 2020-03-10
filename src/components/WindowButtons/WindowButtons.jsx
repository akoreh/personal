import React from 'react';

import { C } from '../../util';

import cls from './WindowButtons.module.scss';

const WindowButtons = ({onClose, onMinimize, onToggleZoom}) => {
    const handleEvent = (evt, callback) => {
        evt.preventDefault();
        evt.stopPropagation();
        callback();
    }

    return <div className={cls.windowButtons}>
        <div className={C(cls.button, cls.close)} onClick={evt => handleEvent(evt, onClose)}/>
        <div className={C(cls.button, cls.minimize)} onClick={evt => handleEvent(evt, onMinimize)}/>
        <div className={C(cls.button, cls.maximize)} onClick={evt => handleEvent(evt, onToggleZoom)}/>
    </div>
}

export default WindowButtons;