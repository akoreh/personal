import React, { useContext } from 'react';
import moment from 'moment';

import { systemTimeContext } from '../../store/SystemTimeProvider';

import { C } from '../../util';

import cls from './TopBar.module.scss';

const TopBar = () => {
    const systemTime = useContext(systemTimeContext);

    return <nav className={cls.topBar}>
        <div className={cls.left}>
            <h1 className={C(cls.brand, 'no-select')}>K</h1>
        </div>
        <div className={cls.center}>
        </div>
        <div className={cls.right}>
            <span className={cls.time}>{moment(systemTime).format('ddd Do MMM HH:mm')}</span>
        </div>
    </nav>
}

export default TopBar;
