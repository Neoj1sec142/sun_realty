import Client from "./Axios";

export const GetNotes = async () => {
    try{
        const res = await Client.get('notes')
        // console.log(res)
        return res.data
    }catch(err){throw err}
}

export const GetNoteById = async (id) => {
    try{
        const res = await Client.get(`notes/${id}`)
        // console.log(res)
        return res.data
    }catch(err){throw err}
}