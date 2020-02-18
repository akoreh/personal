export const C = (...classes) => classes.join(' ');

export const percentageOfValue = (percentage, value) => {
    percentage = +percentage.toString().replace('%', '');

    return (percentage / 100) * value;
}