import { combineReducers } from "redux";
import alert from './alert'
import document from './document'
export default combineReducers({
    alert,
    document
})