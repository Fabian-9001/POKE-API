import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'

const InputsSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

    return (
        <form className='form' onSubmit={submit}>
            <input className='form__input' id='search' type="text" placeholder='Search a Pokemon' />
            <button className='form__btn'>Search</button>
        </form>
    )
}

export default InputsSearch