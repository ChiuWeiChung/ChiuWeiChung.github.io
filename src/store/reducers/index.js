import { combineReducers } from 'redux';
import authReducer from './authReducer';
import noteReducer from './noteReducer';
const reducers = combineReducers({
    auth: authReducer,
    notes: noteReducer
})

export default reducers