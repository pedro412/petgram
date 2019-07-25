import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context)
  const buttonStyle = {
    position: 'relative',
    zIndex: '999',
    backgroundColor: 'red',
    padding: '10px',
    fontWeight: 'bold',
    color: 'White',
    borderRadius: '5px',
    margin: '0 8px'
  }
  return (
    <Fragment>
      <h1>User</h1>
      <hr />
      <button style={buttonStyle} onClick={removeAuth}>Cerrar Sesión</button>
    </Fragment>
  )
}
