import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default () => {
  let { name } = useParams();
  return (
    <div>
      {name}
      <Link to="/about">About</Link>
    </div>
  )
}