import React from 'react';

import cls from './HomePage.module.scss';

const HomePage = () => {
	return (
		<div className={cls.homePage}>
			<h1>Groogle</h1>
			<input type="text" />
		</div>
	);
};

export const tabOptions = {
	title: 'Home',
	content: <HomePage />
};

export default HomePage;
