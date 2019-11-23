import React from 'react'
import Style from './style.module.scss'
import Button from '../../components/Button'

export default () => {
  return (
    <div className={Style.About}>
      <div className={Style.text}>
        <span>Halooo, selamat datang di EVERY Tour!</span>
        <span>EVERY adalah agen perjalanan wisata yang menyediakan jasa paket wisata seperti Open Trip, Private Trip, Family Gathering, dan Company Outing.</span>
        <span>Jadi, kapan mau liburan bareng EVERY?</span>
        <Button To="/destinations" CustomStyle={Style.button}> Liburan Yuk!</Button>
      </div>
    </div>
  )
}