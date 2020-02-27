import React from 'react';

import cls from './Calculator.module.scss';

const buttons = [
    ['C', '+/-', '%', '÷'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '=']
];

export const appSettings = {
    appIdentifier: 'calculator',
    title: 'Calculator',
    width: '20%',
    height: '50%',
    isContentApp: true,
};

const AppCalculator = () => {
    return <div className={cls.calculator}>
        <div className={cls.display} />
        <div className={cls.buttons}>
            {buttons.map(buttonRow => (
                <div className={cls.buttonRow}>
                    {buttonRow.map(label => <span className={cls.button}>{label}</span>)}
                </div>
            ))}
        </div>
    </div>;
};

export default AppCalculator;