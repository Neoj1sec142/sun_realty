const {GET_CLIENTS, GET_CLIENT_DETAIL, CREATE_CLIENT, DESTROY_CLIENT} = require('../types')

const initialState = {
    clients: [],
    clientDetail: {},
    loading: true
}

const ClientReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CLIENTS:
            return{...state, clients: action.payload, loading: false}
        case GET_CLIENT_DETAIL:
            return{...state, clientDetail: action.payload, loading: false}
        case CREATE_CLIENT:
            return{...state, clients: action.payload, loading: false}
        case DESTROY_CLIENT:
            return{...state, clients: action.payload, loading: false}
        default:
            return{...state}
    }
}

export default ClientReducer