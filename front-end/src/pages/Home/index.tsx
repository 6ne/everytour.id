import React, { useState } from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'
import Burger from '../../components/Burger'
import Button from '../../components/Button'

export default () => {
  return (
    <div className={Style.Home}>
      <Burger/>
      <div className={Style.title}>EVERY</div>
      <div className={Style.subtitle}>Helping EVERYbuddy going EVERYwhere!</div>
      <Button to="/destinations" content="Liburan Yuk!" fontSize="calc(1em + 1vw)" />
    </div>
  )
}