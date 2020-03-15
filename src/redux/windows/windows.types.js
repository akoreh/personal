/**
 * Window Options
 * @typedef WindowOptions
 * @property {string} id - uniquely identifies the window that is opened (only 1 window per app)
 * @property {JSX.Element} content
 * @property {('app' | 'folder')} type - the type of app that will the window will display (apps have different styling from folders)
 * @property {string} title - title of the app (will be displayed on drag handle of the window)
 * @property {(string | number)} width - initial width of the window. Either number (taken as pixels) or CSS property
 * @property {(string | number)} height - initial height of the window
 * @property {boolean} isFocused - if true the window will be above everything else (as zIndex)
 * @property {boolean} isZoomed - if window is fullscreen
 * @property {boolean} isMinimized - if window is minimized to dock
 */

const WindowActionTypes = {
	OPEN_WINDOW: 'OPEN_WINDOW',
	CLOSE_WINDOW: 'CLOSE_WINDOW',
	TOGGLE_WINDOW_MINIMIZED: 'TOGGLE_WINDOW_MINIMIZED',
	TOGGLE_WINDOW_ZOOM: 'TOGGLE_WINDOW_ZOOM',
	SET_WINDOW_FOCUSED: 'SET_WINDOW_FOCUSED',
	UPDATE_WINDOW_DIMENSIONS: 'UPDATE_WINDOW_DIMENSIONS'
};

export default WindowActionTypes;
