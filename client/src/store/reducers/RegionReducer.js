const {GET_REGIONS, GET_REGION_DETAIL, CREATE_REGION, DESTROY_REGION} = require('../types')

const initialState = {
    regions: [],
    regioinDetail: {},
    newRegion: {},
    loading: true
}

const RegionReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_REGIONS:
            return{...state, regions: action.payload, loading: false}
        case GET_REGION_DETAIL:
            return{...state, clientDetail: action.payload, loading: false}
        case CREATE_REGION:
            return{...state, regions: action.payload, loading: false}
        case DESTROY_REGION:
            return{...state, regions: action.payload, loading: false}
        default:
            return{...state}
    }
}

export default RegionReducer