import React, {useState, useEffect} from 'react'
import { GetPropertys } from '../services/PropertyServices'
const Proptertys = () => {
    const [data, setData] = useState([])
    const current_is_staff = localStorage.getItem('is_staff')
    // title location address water_damage owner_name description user_id
    useEffect(() => {
        const getDt = async () => {
            const data = await GetPropertys()
            // .then(res => console.log(res, "Success"))
            // .catch(err => console.log(err, "Err"))
            setData(data)
        }
        getDt()
    }, [])
    
    if(data)
    return(
        <div className='container'>
            <br></br>
            <div className='card'>
                <h2 className='text-center'>Properties</h2>
            </div>
            <br></br>
            {current_is_staff
            ?   <div className='card'>
                    <div className='row'>
                        <select>
                            <option>Yo 1</option>
                            <option>Yo 3</option>
                            <option>Yo 2</option>
                        </select>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-outline-dark'>yo</button>
                        </div>
                        <div className='col'>
                            <button className='btn btn-outline-dark'>Yooo</button>
                        </div>
                    </div>
                </div>
            : null}
            <br></br>
            {data.map((p) => (
            <div key={p.id}>
                <br></br>
                <a href={`/post/${p.id}`} id="dt"><div className='card' >
                    <br></br>
                    <div className='row'>
                        <div className='col'>
                        <h5 className='text-center'>{p.title}</h5>
                        </div>
                        <div className='col'>
                        <h5 className='text-center'>{p.owner_name}</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='text-muted text-center'>{p.location}</p>
                    </div>
                    <div className='row'>
                        <p className='text-muted text-center'>{p.description}</p>
                    </div>
                </div></a>
                <br></br>
            </div>)) }
        </div>
    )
}

export default Proptertys