import React, { Fragment } from 'react'
import { FavsWithQuery } from '../container/getFavorites'

export const Favs = () => {
  return (
    <Fragment>
      <h1>Favs</h1>
      <FavsWithQuery />
    </Fragment>
  )
}
