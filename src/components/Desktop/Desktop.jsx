import React from 'react';

import DesktopWindows from './DesktopWindows';
import DesktopIcons from './DesktopIcons';

import cls from './Desktop.module.scss';

const Desktop = () => (
	<div className={cls.desktop}>
		<DesktopWindows />
		<DesktopIcons />
	</div>
);

export default Desktop;
