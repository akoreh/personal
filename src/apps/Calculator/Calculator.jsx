import React from 'react';

import cls from './Calculator.module.scss';

const buttons = [
    ['C', '+/-', '%', '÷'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '=']
];

const AppCalculator = () => {
    return <div className={cls.calculator}>
        <div className={cls.display} />
        <div className={cls.buttons}>
            {buttons.map((buttonRow, index) => (
                <div key={index} className={cls.buttonRow}>
                    {buttonRow.map(label => <span key={label} className={cls.button}>{label}</span>)}
                </div>
            ))}
        </div>
    </div>;
};

export const appOpts = {
    appIdentifier: 'calculator',
    content: <AppCalculator />,
    type: 'app',
    title: 'Calculator',
    style: {
        width: '20%',
        height: '50%',
    }
};

export default AppCalculator;