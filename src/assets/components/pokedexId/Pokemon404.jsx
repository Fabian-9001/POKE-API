import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {

  return (
    <section className='error__container'>
      <h2 className='error__title'>Pokemon Not Found</h2>
      <div className='container__error__title'>
        <p className='error__number error__number1'>4</p>
        <div className='container__error__pokeball animate__animated animate__bounce'>

          <div className='error__pokeball'>
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

        </div>
        <p className='error__number error__number2'>4</p>
      </div>
      <Link className='error__link' to='/pokedex'>Return TO Pokedex</Link>
    </section>
  )
}

export default Pokemon404