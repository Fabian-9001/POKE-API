import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelecByType = ({ setTypeSelected, setpage }) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setTypeSelected(e.target.value)
        setpage(1)
    }

    return (<div>
        <select className='select' onChange={handleChange}>
            <option value="All Pokemons">All Pokemons</option>
                {
                    types?.map(type => (
                        <option className='option__pokedex' key={type.url} value={type.url}>{type.name}</option>
                    ))
                }   
        </select>
    </div>

    )
}

export default SelecByType