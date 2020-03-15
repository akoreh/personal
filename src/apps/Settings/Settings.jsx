import React from 'react';

import cls from './Settings.module.scss';

const Settings = () => {
	return <div className={cls.settings}>Settings</div>;
};

export const windowOpts = {
	id: 'settings',
	content: <Settings />,
	type: 'app',
	title: 'Settings',
	width: '60%',
	height: '60%'
};

export default Settings;
