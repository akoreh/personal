import React from 'react';

import { C } from '../../util';

import cls from './WindowButtons.module.scss';

const WindowButtons = ({onClose, onToggleZoom}) => (
    <div className={cls.windowButtons}>
        <div className={C(cls.button, cls.close)} onClick={evt => {evt.preventDefault(); onClose()}}/>
        <div className={C(cls.button, cls.minimize)} />
        <div className={C(cls.button, cls.maximize)} onClick={evt => {evt.preventDefault(); onToggleZoom()}}/>
    </div>
);

export default WindowButtons;