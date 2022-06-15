const {GET_NOTES, GET_NOTE_DETAIL, CREATE_NOTE, DESTROY_NOTE} = require('../types')

const initialState = {
    notes: [],
    noteDetail: {},
    loading: true
}

const NoteReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NOTES:
            return{...state, notes: action.payload, loading: false}
        case GET_NOTE_DETAIL:
            return{...state, noteDetail: action.payload, loading: false}
        case CREATE_NOTE:
            return{...state, notes: action.payload, loading: false}
        case DESTROY_NOTE:
            return{...state, notes: action.payload, loading: false}
        default:
            return{...state}
    }
}

export default NoteReducer