import Client from "./Axios";

export const GetRegions = async () => {
    try{
        const res = await Client.get('regions')
        // console.log(res)
        return res.data
    }catch(err){throw err}
}

export const GetRegionById = async (id) => {
    try{
        const res = await Client.get(`regions/${id}`)
        // console.log(res)
        return res.data
    }catch(err){throw err}
}