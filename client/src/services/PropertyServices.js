import Client from "./api";
// Property Services
// user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='staff_propertys', blank=True)
//     title = models.CharField(max_length=100, null=True, blank=True)
//     location = models.CharField(max_length=50, null=True, blank=True)
//     address = models.CharField(max_length=100, null=True, blank=True)
//     water_damage = models.BooleanField(default=False, null=True, blank=True)
//     owner_name = models.CharField(max_length=100, null=True, blank=True)
//     # img = models.CharField(max_length=100, null=True, blank=True)
//     description = models.TextField(null=True, blank=True)
//     date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
//     date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
export const GetPropertys = async () => {
    try{
        const res = await Client.get('propertys')
        // console.log(res)
        return res.data
    }catch(err){throw err}
}

export const GetPropertyById = async (id) => {
    try{
        const res = await Client.get(`propertys/${id}`)
        // console.log(res)
        return res.data
    }catch(err){throw err}
}
// export const GetPropertyByUsername = async (username) => {
//     try{
//         const res = await Client.get(`propertys/${username}`)
//         // console.log(res)
//         return res.data
//     }catch(err){throw err}
// }

export const CreateProperty = async (post) => {
    console.log(post, "BEfore TRY")
    try {
        const data = {
            title: post.title,
            location: post.location,
            address: post.address,
            water_damage: post.water_damage,
            owner_name: post.owner_name,
            description: post.description,
            user_id: post.user_id
        }
        console.log(data, "Before axios")
        await Client.post(`propertys`, data)
        .then((res) => console.log(res, "successfully posted property"))
        .catch((err) => console.log(err))
    } catch (err) {
        throw err
    } 
}
    
export const RemoveProperty = async (id) => {
    try{
        await Client.delete(`propertys/${id}`)
        .then((res) => console.log(res, "Successfully deleted property"))
        .catch((err) => console.log(err))
    } catch (err) {
        throw err
    }
}