import { combineReducers } from 'redux';

import windowsReducer from './windows/windows.reducer';

const rootReducer = combineReducers({
    windows: windowsReducer
});

export default rootReducer;