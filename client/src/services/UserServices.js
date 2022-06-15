import Client from "./Axios";

export const GetUsers = async () => {
    try{
        const res = await Client.get('users')
        // console.log(res)
        return res.data
    }catch(err){throw err}
}

export const GetUserById = async (id) => {
    try{
        const res = await Client.get(`users/${id}`)
        // console.log(res)
        return res.data
    }catch(err){throw err}
}

export const RemoveUser = async (id) => {
    try{
        await Client.delete(`users/${id}`)
        .then((res) => console.log(res, "Successfully deleted post"))
        .catch((err) => console.log(err))
    } catch (err) {
        throw err
    }
}