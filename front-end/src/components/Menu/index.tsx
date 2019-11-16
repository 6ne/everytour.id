import React from 'react'
import Style from './style.module.scss'
import Layout from '../Layout'
import MenuIcon from '../MenuIcon'
import home from '../../assets/img/home.png'
import about from '../../assets/img/about.png'
import destinations from '../../assets/img/destinations.png'
import contact from '../../assets/img/contact.png'

export default () => {
  return (
    <div className={Style.Menu}>
      <Layout>
        <MenuIcon To="/" Content="Home" ImgUrl={home} />
        <MenuIcon To="/about" Content="About" ImgUrl={about} />
      </Layout>
      <Layout>
        <MenuIcon To="/destinations" Content="Destination"
          ImgUrl={destinations} />
        <MenuIcon To="/contact" Content="Contact" ImgUrl={contact} />
      </Layout>
    </div>
  )
}