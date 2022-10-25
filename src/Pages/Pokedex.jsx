import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../assets/components/pokedex/CardPoke'
import InputsSearch from '../assets/components/pokedex/InputsSearch'
import Pagination from '../assets/components/pokedex/Pagination'
import SelecByType from '../assets/components/pokedex/SelecByType'
import Pokemon404 from '../assets/components/pokedexId/Pokemon404'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')
  const userName = useSelector(state => state.userName)

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])

  //PAGINACION
  const [page, setpage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage
  const [disablePokeball, setDisablePokeball] = useState(false)
  const [configuration, setConfiguration] = useState(false)

  const plusPokemons = () => {
    pokePerPage > 100000 ?
      <Pokemon404 />
      :
      setPokePerPage(pokePerPage + 1)
  }

  const minusPokemons = () => {
    pokePerPage > 1 ?
      pokePerPage = setPokePerPage(pokePerPage - 1)
      : ''
  }

  const handleSubmit = e => {
    e.preventDefault()
    const numberPage = e.target.pokedexInput.value
    numberPage <= 125 ? setpage(numberPage) : ''
  }

  return (
    <div>

      <div className={`container__pokedex__configure ${configuration ? '' : 'pokedex__disable'}`}>
        <div className='pokedex__configure'>

          <div className='pokedex__initialPage'>
            <form className='pokedex__form' onSubmit={handleSubmit}>
              <label className='pokedex__label' htmlFor="pokedexInput">Number of Page</label>
              <input className='pokedex__input' id='pokedexInput' type="text" />
              <button className='pokedex__btn initial__page__btn'>Search</button>
            </form >
          </div>


          <div className='pokedex__pokemonsPage'>
            <button className='pokedex__btn' onClick={minusPokemons} >Minus Pokemons</button>
            <div>{pokePerPage}</div>
            <button className='pokedex__btn' onClick={plusPokemons} >Plus Pokemons</button>
          </div>


          <div className='container__selec'>
            <SelecByType setTypeSelected={setTypeSelected} setpage={setpage} />
          </div>
          <img onClick={() => setConfiguration(false)} className='pokedex__exit__btn' src="img/exit icon.png" alt="" />
        </div>
      </div>


      {/*}<header>
        <h1>Pokedex</h1>
        <p>Welcome <span>{userName}</span> ,here you can find your favorite pokemon.</p>
      </header>{*/}

      <aside className='aside'>
        <InputsSearch />
        <div className='container__pagination'>
          <Pagination setpage={setpage} page={page} pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} />
        </div>
      </aside>


      <img onClick={() => setConfiguration(true)} className='pokedex__configuracion__btn' src="img/configuration.png" alt="" />
      <button onClick={() => setDisablePokeball(!disablePokeball)} className='change__pokeball__btn'>{`${disablePokeball ? 'Show Pokeball' : 'Show Cart'}`}</button>

      <main className='main'>

        <div className='container__pokemons'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
                disablePokeball={disablePokeball}
              />
            ))
          }
        </div>


        <div className='pagination__footer'>
          <Pagination setpage={setpage} page={page} pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} />
        </div>

      </main>

      <div className='footer'>
        <div className='footer__circle'></div>
      </div>
    </div>
  )
}

export default Pokedex