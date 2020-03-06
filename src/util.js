import { filter } from 'lodash';

export const C = (...classes) => filter(classes).join(' ');