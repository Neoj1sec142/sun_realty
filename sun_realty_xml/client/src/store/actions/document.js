import { 
    LOAD_DOCUMENTS_SUCCESS, LOAD_DOCUMENTS_FAIL
} from "../types";
import { GetDocuments } from "../services/DocumentServices";

export const load_documents = () => async dispatch => {
    try{
        const res = await GetDocuments()
        if(res.status === 200){
            dispatch({
                type: LOAD_DOCUMENTS_SUCCESS,
                payload: res.data
            })
        }else{
            console.log(res, "Err 1")
            dispatch({
                type: LOAD_DOCUMENTS_FAIL
            })
        }
    }catch(err){
        console.log(err, "Err 2")
        dispatch({
            type: LOAD_DOCUMENTS_FAIL
        })
    }
}