import {combineReducers} from 'redux';
import onlineUsr from './getOnlineUsr';
import allTasks from './getAllTasks';

export default combineReducers({
    onlineUsr,
    allTasks
});