import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const CreateGenres = () =>{
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false)
    const onChange = event => {
        setName(event.target.value);
    }
    const save = () => {
        axios.post('/api/genres', {
            "name": name
        })
        .then(res => {
            if(res.status == 200){
                setSuccess(true)
            }
        })
    }
    if(success){
        return <Redirect to='/generos' />
    }

    return(
        <div className='container'>
            <h1>Novo gênero {name}</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='nameGenres'>Nome do gênero</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='nameGenres' aria-describedby='Nome do gênero' placeholder='Nome do gênero' />
                </div>
                <button type="button" className="btn btn-primary" onClick={save}>Salvar</button>
            </form>
        </div>
    )
}

export default CreateGenres;