import React from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import { TweenLite } from 'gsap';

import WindowButtons from '../WindowButtons/WindowButtons';

import {
	closeWindow,
	toggleWindowMinimized,
	toggleWindowZoom,
	updateWindowDimensions,
	setWindowFocused
} from '../../redux/windows/windows.actions';

import { C } from '../../util';

import cls from './Window.module.scss';

const Window = ({
	closeWindow,
	minimizeWindow,
	toggleWindowZoom,
	updateWindowDimensions,
	setWindowFocused,
	...props
}) => {
	const {
		id,
		elementId,
		dragHandleId,
		resizeHandleId,
		title,
		type,
		width,
		height,
		x,
		y,
		isZoomed,
		isFocused
	} = props.window;

	React.useEffect(onOpen, []);

	function onOpen() {
		const windowElement = document.getElementById(elementId);

		TweenLite.set(windowElement, { display: 'block' });
		TweenLite.from(windowElement, 1, {
			autoAlpha: 0,
			y: '-100%',
			ease: 'elastic.out(1.5, 1.5)'
		});
	}

	function onClose(id) {
		TweenLite.to(document.getElementById(elementId), 0.2, {
			autoAlpha: 0,
			y: -height * 1.5
		}).eventCallback('onComplete', closeWindow.bind(null, id));
	}

	function onMinimize(id) {
		TweenLite.to(document.getElementById(elementId), 0.3, {
			width: 0,
			y: height * 2,
			x: window.innerWidth / 2
		}).eventCallback('onComplete', minimizeWindow.bind(null, id));
	}

	function onZoomIn(id) {
		TweenLite.to(document.getElementById(elementId), 0.2, {
			height: '100%',
			width: '100%',
			x: 0,
			y: 0,
			top: '30px'
		}).eventCallback('onComplete', toggleWindowZoom.bind(null, id));
	}

	function onResize(_, { size }) {
		const { width, height } = size;
		updateWindowDimensions(id, { width, height });
	}

	function setFocused() {
		if (!isFocused) {
			setWindowFocused(id);
		}
	}

	return (
		<Draggable handle={`#${dragHandleId}`} defaultPosition={{ x, y }} onStart={setFocused}>
			<ResizableBox
				id={elementId}
				className={C(cls.window, isZoomed && cls.zoomed, isFocused && cls.focused, type === 'app' && cls.app)}
				style={{ width, height }}
				width={width}
				height={height}
				minConstraints={[450, 300]}
				handle={() => <div id={resizeHandleId} className={cls.resizeHandle}></div>}
				onClick={setFocused}
				onResize={onResize}
			>
				{!isZoomed && (
					<React.Fragment>
						<div id={dragHandleId} className={cls.dragHandle}>
							<p className={cls.title}>{title}</p>
						</div>
						<div className={cls.buttons}>
							<WindowButtons
								onClose={onClose.bind(null, id)}
								onMinimize={onMinimize.bind(null, id)}
								onToggleZoom={onZoomIn.bind(null, id)}
							/>
						</div>
					</React.Fragment>
				)}
				<div className={cls.content}>{props.children}</div>
			</ResizableBox>
		</Draggable>
	);
};

const mapDispatchToProps = dispatch => ({
	closeWindow: id => dispatch(closeWindow(id)),
	minimizeWindow: id => dispatch(toggleWindowMinimized(id)),
	toggleWindowZoom: id => dispatch(toggleWindowZoom(id)),
	updateWindowDimensions: (id, width, height) => dispatch(updateWindowDimensions(id, width, height)),
	setWindowFocused: id => dispatch(setWindowFocused(id))
});

export default connect(null, mapDispatchToProps)(Window);
