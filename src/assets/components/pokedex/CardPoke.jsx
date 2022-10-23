import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'
import 'animate.css'
const CardPoke = ({ url, disablePokeball }) => {

    const navigate = useNavigate()

    const [cardPokemon, setCardPokemon] = useState()


    useEffect(() => {
        axios.get(url)
            .then(res => setCardPokemon(res.data))
            .catch(err => console.log(err))
    }, [])


    const handleClick = () => {
        navigate(`/pokedex/${cardPokemon?.id}`)
    }


    return (
        <article className='pokemon'>

            <div className='container__pokeball animate__animated animate__bounce' onClick={handleClick}  >

                <div className={`pokeball ${disablePokeball && 'disable__Pokeball'}`}>
                    <div className='pokeball__top' >
                        <img className='pokeball__img1' src="img/pokeball arriba.png" alt="Imagen parte superior de pokeball" />
                        <div className='pokeball__med'>
                            <img className='pokeball__img2' src="img/pokeball medio.png" alt="Imagen de parte central de pokeball" />
                            <div className='pokeball__circle'></div>
                        </div>
                    </div>

                    <div className='pokeball__down'>
                        <img className='pokeball__img3' src="img/pokeball abajo.png" alt="Imagen de parte inferior de pakeball" />
                    </div>
                </div>

                <div className={`${disablePokeball ? 'show__card' : 'pokeball__card'} 
                ${cardPokemon?.types[0].type.name === "normal" ? 'templeate-normal' :
                        cardPokemon?.types[0].type.name === "fighting" ? 'templeate-fighting' :
                            cardPokemon?.types[0].type.name === "grass" ? 'templeate-grass' :
                                cardPokemon?.types[0].type.name === "water" ? 'templeate-water' :
                                    cardPokemon?.types[0].type.name === "dark" ? 'templeate-dark' :
                                        cardPokemon?.types[0].type.name === "fire" ? 'templeate-fire' :
                                            cardPokemon?.types[0].type.name === "electric" ? 'templeate-electric' :
                                                cardPokemon?.types[0].type.name === "psychic" ? 'templeate-psychic' :
                                                    cardPokemon?.types[0].type.name === "fairy" ? 'templeate-fairy' :
                                                        cardPokemon?.types[0].type.name === "steel" ? 'templeate-steel' :
                                                            cardPokemon?.types[0].type.name === "poison" ? 'templeate-poison' :
                                                                cardPokemon?.types[0].type.name === "ice" ? 'templeate-ice' :
                                                                    cardPokemon?.types[0].type.name === "dragon" ? 'templeate-dragon' :
                                                                        cardPokemon?.types[0].type.name === "flying" ? 'templeate-flying' :
                                                                            cardPokemon?.types[0].type.name === "bug" ? 'templeate-bug' :
                                                                                cardPokemon?.types[0].type.name === "ground" ? 'templeate-ground' :
                                                                                    cardPokemon?.types[0].type.name === "rock" ? 'templeate-rock' :
                                                                                        cardPokemon?.types[0].type.name === "ghost" ? 'templeate-ghost' : ''
                    }
                `}>

                    <header className='card__header'>
                        <div className={`card__background__img 
                        ${cardPokemon?.types[0].type.name === "normal" ? 'background-normal' :
                                cardPokemon?.types[0].type.name === "fighting" ? 'background-fighting' :
                                    cardPokemon?.types[0].type.name === "grass" ? 'background-grass' :
                                        cardPokemon?.types[0].type.name === "water" ? 'background-water' :
                                            cardPokemon?.types[0].type.name === "dark" ? 'background-dark' :
                                                cardPokemon?.types[0].type.name === "fire" ? 'background-fire' :
                                                    cardPokemon?.types[0].type.name === "electric" ? 'background-electric' :
                                                        cardPokemon?.types[0].type.name === "psychic" ? 'background-psychic' :
                                                            cardPokemon?.types[0].type.name === "fairy" ? 'background-fairy' :
                                                                cardPokemon?.types[0].type.name === "steel" ? 'background-steel' :
                                                                    cardPokemon?.types[0].type.name === "poison" ? 'background-poison' :
                                                                        cardPokemon?.types[0].type.name === "ice" ? 'background-ice' :
                                                                            cardPokemon?.types[0].type.name === "dragon" ? 'background-dragon' :
                                                                                cardPokemon?.types[0].type.name === "ground" ? 'background-ground' :
                                                                                    cardPokemon?.types[0].type.name === "rock" ? 'background-rock' :
                                                                                        cardPokemon?.types[0].type.name === "bug" ? 'background-bug' :
                                                                                            cardPokemon?.types[0].type.name === "ghost" ? 'background-ghost' : ''
                            }
                        `}></div>
                        <img className='card__img' src={cardPokemon?.sprites.other['official-artwork'].front_default} alt={`Imagen del Pokemon:${cardPokemon?.name}`} />
                    </header>

                    <div className='card__container__info'>
                        
                        <section className='card__description'>
                            <h3 className='card__name'>{cardPokemon?.name}</h3>

                            <ul className='card__types'>
                                <p>Type:</p>
                                {
                                    cardPokemon?.types.map(type => (
                                        <li key={type.slot} className='card__type'>{type.type.name}</li>
                                    ))

                                }
                            </ul>
                        </section>

                        <section className='card__stats'>
                            <ul className='card__list'>
                                {
                                    cardPokemon?.stats.map(stat => (
                                        <li key={stat.stat.name} className='card__stat'>
                                            <span className='card__statText'>{stat.stat.name}:</span>
                                            <span className='card__statNumber'>{stat.base_stat}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                    
                    </div>

                </div>

            </div>

        </article>
    )
}

export default CardPoke