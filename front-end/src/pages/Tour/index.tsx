import React from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className={Style.Tour}>
      <div className={Style.banner}>Destinations</div>
      <div className={Style.locations}>
        <Link to='/destination/pulauA' className={Style.location}>
          pulauA
        </Link>
        <Link to='/destination/pulauB' className={Style.location}>
          pulauB
        </Link>
        <Link to='/destination/pulauC' className={Style.location}>
          pulauC
        </Link>
        <Link to='/destination/pulauD' className={Style.location}>
          pulauD
        </Link>
        <Link to='/destination/pulauE' className={Style.location}>
          pulauE
        </Link>
      </div>
    </div>
  )
}