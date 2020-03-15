import { filter, map, find, findIndex } from 'lodash';

import { getRandomInt } from '../../util';

const DEFAULT_OPTS = {
	type: 'folder', //folder / app
	isZoomed: false,
	width: '50%',
	height: '60%'
};

export const openWindow = (openWindows, windowOpts) => {
	const windowAlreadyOpen = find(openWindows, openWindow => openWindow.id === windowOpts.id);

	if (windowAlreadyOpen) {
		return openWindows;
	}

	return [...openWindows, createNewWindow(windowOpts)];
};

export const closeWindow = (openWindows, id) => filter(openWindows, openWindow => openWindow.id !== id);

export const toggleWindowMinimized = (openWindows, id) =>
	map(openWindows, openWindow => ({
		...openWindow,
		isMinimized: openWindow.id === id ? !openWindow.isMinimized : openWindow.isMinimized
	}));

export const toggleWindowZoom = (openWindows, id) =>
	map(openWindows, openWindow => ({
		...openWindow,
		isZoomed: openWindow.id === id ? !openWindow.isZoomed : false
	}));

export const setWindowFocused = (openWindows, id) =>
	map(openWindows, openWindow => ({
		...openWindow,
		isFocused: openWindow.id === id ? true : false
	}));

export const updateWindowDimensions = (openWindows, { id, dimensions }) => {
	const windows = [...openWindows];
	const windowIndex = findIndex(windows, window => window.id === id);

	windows[windowIndex] = { ...windows[windowIndex], ...dimensions };

	return windows;
};

const createNewWindow = windowOpts => {
	const elementId = `window_${windowOpts.id}`;

	const window = {
		elementId,
		dragHandleId: `${elementId}__dragHandle`,
		resizeHandleId: `${elementId}__resizeHandle`,
		...DEFAULT_OPTS,
		...windowOpts
	};

	return {
		...window,
		...calculateWindowDimensions(window.width, window.height)
	};
};

function calculateWindowDimensions(width, height) {
	const widthNum = calculateDimensionRelativeToContainer(width, window.innerWidth);
	const heightNum = calculateDimensionRelativeToContainer(height, window.innerHeight);
	const centerX = window.innerWidth / 2 - widthNum / 2 + getRandomInt(-50, 150);
	const centerY = getRandomInt(0, 150);

	return {
		width: widthNum,
		height: heightNum,
		x: centerX,
		y: centerY
	};
}

/**
 * Converts dimension values like '50%' or '50vh' to actual pixel value
 * based on a parent dimension
 * @param {string} dimension
 * @param {number} parentDimension
 */
export function calculateDimensionRelativeToContainer(dimension, parentDimension) {
	if (typeof dimension === 'number') {
		return dimension;
	}

	if (dimension.indexOf('px') !== -1) {
		return parseInt(dimension.replace('px', ''));
	}

	dimension = parseInt(
		dimension
			.replace('vw', '')
			.replace('vh', '')
			.replace('%', '')
	);

	return (dimension / 100) * parentDimension;
}
