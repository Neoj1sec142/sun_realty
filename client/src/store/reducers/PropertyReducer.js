const {GET_PROPERTIES, GET_PROPERTY_DETAIL, CREATE_PROPERTIES, DESTROY_PROPERTIES}= require('../types')

const initialState = {
    properties: [],
    propertyDetail: {},
    loading: true
}

const PropertyReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PROPERTIES:
            return{...state, properties: action.payload, loading: false}
        case GET_PROPERTY_DETAIL:
            return{...state, propertyDetail: action.payload, loading: false}
        case CREATE_PROPERTIES:
            return{...state, properties: action.payload, loading: false}
        case DESTROY_PROPERTIES:
            return{...state, properties: action.payload, loading: false}
        default:
            return{...state}
    }
}

export default PropertyReducer