import * as services from '../../services/ProjectServices'
import * as types from '../types'  

export const LoadClients = () => {
    return async (dispatch) => {
        try{
            const data = await services.LoadClients()
            console.log(data)
            dispatch({
                type: types.GET_CLIENTS,
                payload: data
            })
        }catch(err){throw err}
    }
}

export const LoadClientDetail = (client_id) => {
    return async (dispatch) => {
        try{
            const data = await services.LoadClientDetail(client_id)
            console.log(data)
            dispatch({
                type: types.GET_CLIENT_DETAIL,
                payload: data
            })
        }catch(err){throw err}
    }
}