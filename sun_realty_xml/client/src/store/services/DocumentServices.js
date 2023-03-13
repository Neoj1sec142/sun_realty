import Client from "./api"

export const GetDocuments = async () => {    
    try{
        const res = await Client.get(`docs/`)
        console.log(res, "res after call in service")
        return res
    }catch(err){console.log(err)}
}





export const UpdatePost = async (id, port) => {
    try {
        const res = await Client.put(`s/posts/${id}/`, port)
        return res
      } catch (err) {throw err}
}

export const RemovePost = async (id) => {
    try{
        const res = await Client.delete(`s/posts/${id}/`)
        return res
    } catch (err) {throw err}
}

export const CreatePost = async (post) => {
    console.log(post, "BEfore TRY")
    let headers = {
        "Authorization": "JWT " + localStorage.getItem('access_token'),
        "accept": "application/json",
        "Content-Type": "multipart/form-data"
    }
    try {
        const data = {
            title: post.title,
            author: post.author,
            text: post.text,
            image: post.image
        }
        console.log(data, "Before axios")
        const res = await Client.post(`s/posts/`, data, {headers: headers})
        return res
    } catch (err) {console.log(err)}
}