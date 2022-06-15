import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ClientReducer from './reducers/ClientReducer'
import NoteReducer from './reducers/NoteReducer'
import PropertyReducer from './reducers/PropertyReducer'
import RegionReducer from './reducers/RegionReducer'

const store = createStore(
    combineReducers({
        clientState: ClientReducer,
        noteState: NoteReducer,
        propertyState: PropertyReducer,
        regionState: RegionReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store