import React from 'react'
import FormHome from '../assets/components/Home/FormHome'
import '../assets/components/Home/styles/Home.css'

const Home = () => {
  return (
    <div className='container__home'>

      <div className="sky-container">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className='home'>
        <img className='home__logo' src="img/logo pokemon.png" alt="" />
        <h2 className='home__subtitle'>Hi Trainer!</h2>
        <p className='home__text'>Give me your to see the pokedex</p>

        <FormHome />

      </div>

    </div>
  )
}

export default Home