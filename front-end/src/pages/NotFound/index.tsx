import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <span>Page not found</span>
      <Link to='/'>Go home!</Link>
    </div>
  )
}