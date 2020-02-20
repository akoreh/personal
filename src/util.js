import { filter } from 'lodash';

export const C = (...classes) => filter(classes).join(' ');

export const percentageOfValue = (percentage, value) => {
    percentage = +percentage.toString().replace('%', '');

    return (percentage / 100) * value;
}