import React from 'react';

import { C } from '../../util';

import cls from './TopBar.module.scss';

const TopBar = () => (
    <nav className={cls.topBar}>
        <div className={cls.left}>
            <h1 className={C(cls.brand, 'no-select')}>K</h1>
        </div>
        <div className={cls.center}>
        </div>
        <div className={cls.right}>

        </div>
    </nav>
);

export default TopBar;
