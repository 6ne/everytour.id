import React from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className={Style.About}>
      Halooo, selamat datang di EVERY Tour!
      EVERY adalah agen perjalanan wisata yang menyediakan jasa paket wisata seperti Open Trip, Private Trip, Family Gathering, dan Company Outing. Jadi, kapan mau liburan bareng EVERY?

      (Ada button “LIBURAN YUK!” trs redirect ke destination)

      <Link to="/contact">Contact Us</Link>
    </div>
  )
}