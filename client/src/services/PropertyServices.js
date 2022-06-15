import Client from "./Axios";

export const GetProjects = async () => {
    try{
        const res = await Client.get('projects')
        // console.log(res)
        return res.data
    }catch(err){throw err}
}

export const GetProjectById = async (id) => {
    try{
        const res = await Client.get(`projects/${id}`)
        // console.log(res)
        return res.data
    }catch(err){throw err}
}