import React from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className={Style.Destinations}>
      <div className={Style.card}>Destinations</div>
      <Link to='/destination/pulauA' className={Style.card}>
        pulauA
      </Link>
      <Link to='/destination/pulauB' className={Style.card}>
        pulauB
      </Link>
      <Link to='/destination/pulauC' className={Style.card}>
        pulauC
      </Link>
      <Link to='/destination/pulauD' className={Style.card}>
        pulauD
      </Link>
      <Link to='/destination/pulauE' className={Style.card}>
        pulauE
      </Link>
      <Link to='/contact' className={Style.card}>
        More destination
      </Link>
    </div>
  )
}