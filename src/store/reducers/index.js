import { combineReducers } from 'redux';
import authReducer from './authReducer';

const reducers = combineReducers({
    test: () => 'hihi',
    auth:authReducer
})

export default reducers