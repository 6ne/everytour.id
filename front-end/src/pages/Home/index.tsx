import React from 'react'
import Style from './style.module.scss'
import Button from '../../components/Button'

export default () => {
  return (
    <div className={Style.Home}>
      <div className={Style.title}>EVERY</div>
      <div className={Style.subtitle}>Helping EVERYbuddy going EVERYwhere!</div>
      <Button To="/destinations" CustomStyle={Style.customButton}>
        Liburan Yuk!
      </Button>
    </div>
  )
}