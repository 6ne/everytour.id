import React from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className={Style.Home}>
      <div className={Style.title}>EVERY</div>
      <div className={Style.subtitle}>
        helping EVERYbuddy going EVERYwhere!
      </div>
      <Link to="/tour" className={Style.button}>Liburan Yuk!</Link>
    </div>
  )
}