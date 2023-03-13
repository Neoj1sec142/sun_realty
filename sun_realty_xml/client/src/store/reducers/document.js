/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_DOCUMENTS_SUCCESS, LOAD_DOCUMENTS_FAIL
} from '../types'

const initialState = {
    documents: [],
    documentDetails: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_DOCUMENTS_SUCCESS:
            return{
                ...state,
                documents: payload
            }
        case LOAD_DOCUMENTS_FAIL:
            return{...state}
        default:
            return state
    }
}