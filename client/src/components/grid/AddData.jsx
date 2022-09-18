import React, { useState } from 'react'

const AddData = () => {
    const [form, setForm] = useState({
        title: '', location: '',
        address: '', water_damage: false,
        owner_name: '', description: ''
    })

    const handleChange = (e) => {setForm({...form, [e.target.name]: e.target.value})}

    const handleSubmit = () => {
        alert(form, "Test")
    }

    return(
        <div className='container'>
            <form className='form-group' onSubmit={handleSubmit}>
                <input className='form-control' 
                        placeholder='Title' 
                        name='title' 
                        value={form.title}
                        onChange={handleChange}
                        required />
                <input className='form-control' 
                        placeholder='City, State' 
                        name='location' 
                        value={form.location}
                        onChange={handleChange}
                        required />
                <input className='form-control' 
                        placeholder='Address' 
                        name='address' 
                        value={form.address}
                        onChange={handleChange}
                        required />
                <input className='form-control' 
                        placeholder='Owners Name' 
                        name='owner_name'
                        value={form.owner_name}
                        onChange={handleChange} 
                        required />
                <input className='form-control' 
                        placeholder='Description' 
                        name='description' 
                        value={form.description}
                        onChange={handleChange}
                        required />
                <select name='water_damage' 
                        value={form.water_damage}
                        onChange={handleChange}
                        className='form-select' 
                        aria-label='Default select'>
                    <option value='true'>True</option>
                    <option value='false'>False</option>
                </select>
                <button type='submit' className='btn btn-outline-dark'>Submit</button>
            </form>
        </div>
    )
}

export default AddData