import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../assets/components/pokedex/CardPoke'
import InputsSearch from '../assets/components/pokedex/InputsSearch'
import Pagination from '../assets/components/pokedex/Pagination'
import SelecByType from '../assets/components/pokedex/SelecByType'

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

  return (
    <div>
      <header>
        <h1>Pokedex</h1>
        <p>Welcome <span>{userName}</span> ,here you can find your favorite pokemon.</p>
      </header>

      <aside className='aside'>
        <InputsSearch />
        <SelecByType setTypeSelected={setTypeSelected} setpage={setpage} />
        <div className='container__pagination'>
          <Pagination setpage={setpage} page={page} pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} />
        </div>
      </aside>

      <button onClick={() => setDisablePokeball(!disablePokeball)} className='change__pokeball__btn'>{`${disablePokeball ? 'Show Pokeball' : 'Show Cart'}`}</button>

      <main className='container__pokemons'>
        {
          pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
            <CardPoke
              key={pokemon.url}
              url={pokemon.url}
              disablePokeball={disablePokeball}
            />
          ))
        }
      </main>

      {/*} <Pagination setpage={setpage} page={page} pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} />{*/}

    </div>
  )
}

export default Pokedex