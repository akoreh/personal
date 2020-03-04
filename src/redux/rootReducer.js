import { combineReducers } from 'redux';

import windowsReducer from './windows/windows.reducer';
import browserReducer from './browser/browser.reducer';

const rootReducer = combineReducers({
    windows: windowsReducer,
    browser: browserReducer,
});

export default rootReducer;