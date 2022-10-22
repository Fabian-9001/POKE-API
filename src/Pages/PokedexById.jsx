import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pokemon404 from '../assets/components/pokedexId/Pokemon404'
import '../assets/components/pokedexId/styles/PokedexById.css'


const PokedexById = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)
  const [modalMoves, setModalMoves] = useState(true)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }
    , [])

  if (hasError) {
    return <Pokemon404 />
  }


  return (
    <section className='container__pokemonId'>
       
      <article className='pokemonId'>

        <div className='card__container__pokemonId'>

          <header className='header__pokemonId'>
            <h1 className='name__pokemonId'>{pokemon?.name}</h1>
          </header>

          <div className='container__figures'>

            <div className='circle'>
              <div className='circle2'></div>
            </div>
            <div className='circle3'>
              <div className='circle4'></div>
            </div>

            <div className="line"></div>
            <div className="line2"></div>

            <h2 className={`number__pokemonId ${pokemon?.id > 1000 && 'number__pokemonId--size'}`}>{pokemon?.id}</h2>

            <div className='container__pokeball__pokemonId'  >

              <div className='pokeball__pokemonId'>
                <div className='pokeball__top__pokemonId'>
                  <img className='pokeball__img1__pokemonId' src="img/pokeball arriba.png" alt="Imagen parte superior de pokeball" />
                  <div className='pokeball__med__pokemonId'>
                    <img className='pokeball__img2__pokemonId' src="img/pokeball medio.png" alt="Imagen de parte central de pokeball" />
                    <div className='pokeball__circle__pokemonId'></div>
                  </div>
                </div>

                <div className='pokeball__down__pokemonId'>
                  <img className='pokeball__img3__pokemonId' src="img/pokeball abajo.png" alt="Imagen de parte inferior de pakeball" />
                </div>
              </div>

              <div className='pokeball__img__pokemonId'>
                <img className='img__pokemonId' src={pokemon?.sprites.other.home.front_default} alt={`imagen del pokemon${pokemon?.name}`} />
              </div>

            </div>

          </div>

          <div className='information__pokemonId'>

            <div className='container__btn__pokemonId'>
              <button onClick={() => setModalMoves(false)} className='configure__moves'> Moves</button>
            </div>

            <section className='type__pokemonId'>
              <p className='title__type__pokemonId'>TYPE:</p>
              <ul className='types__pokemonId'>
                {
                  pokemon?.types.map(type => (
                    <li key={type.slot} className='type'>{type.type.name}</li>
                  ))
                }
              </ul>
            </section>

            <section className='stats__pokemonId'>
              <ul className='list__stats__pokemonId'>
                {
                  pokemon?.stats.map(stat => (
                    <li className='stat__pokemonId'>
                      <span className='stat__name'>{stat.stat.name}</span>

                      <div className='percent__line2'>
                        <div style={{ width: stat.base_stat }} className={`percent__line1`}></div>
                      </div>

                      <div className='container__stat'>
                        <span className={`stat ${stat.base_stat <= 60 ? 'percentlow' : stat.base_stat > 60 && stat.base_stat <= 85 ? 'percentmid' : stat.base_stat > 85 ? 'percenthight' : ''}`}>{stat.base_stat}</span>
                      </div>

                    </li>
                  ))
                }
              </ul>
            </section>

            <section className={`moves__pokemonId ${modalMoves && 'exit__btn__pokemonId--disable '}`}>
              <h3 className='moves__title__pokemonId'>MOVES</h3>
              <ul className='list__moves__pokemonId'>
                {
                  pokemon?.moves.map(move => (
                    <li className='move__pokemonId'>{move.move.name}</li>
                  ))
                }
                <button>
                  <img onClick={() => setModalMoves(true)} className='exit__btn__pokemonId' src="img/exit icon.png" alt="" />
                </button>
              </ul>

            </section>

            <section className='abilities__pokemonId'>
              <h3>ABILITIES</h3>
              <ul className='abilities__list__pokemonId'>
                {
                  pokemon?.abilities.map(ability => (
                    <li>{ability.ability.name}</li>
                  ))
                }
              </ul>
            </section>

          </div>

        </div>

      </article>
    </section>
  )
}

export default PokedexById