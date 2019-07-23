import React from 'react'
import Context from '../Context'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ isAuth, activateAuth }) => {
          return (
            <form onSubmit={activateAuth}>
              <button type='submit'>Iniciar Sesión</button>
            </form>
          )
        }
      }
    </Context.Consumer>
  )
}
