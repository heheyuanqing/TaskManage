import {combineReducers} from 'redux';
import onlineUsr from './getOnlineUsr';
import allTasks from './getAllTasks';
import myTasks from './getMyTasks';
export default combineReducers({
    onlineUsr,
    allTasks,
    myTasks,
});