import React from 'react'
import Style from './style.module.scss'
import Layout from '../Layout'
import MenuIcon from '../MenuIcon'
import home from '../../assets/img/home.png'
import about from '../../assets/img/about.png'
import destinations from '../../assets/img/destinations.png'
import contact from '../../assets/img/contact.png'

interface IMenu { OnClick: VoidFunction }

export default ({ OnClick }: IMenu) => {
  return (
    <div className={Style.Menu}>
      {/* <Layout> */}
        <MenuIcon To="/" Content="Home" ImgUrl={home} OnClick={OnClick} />
        <MenuIcon To="/about" Content="About" ImgUrl={about}
          OnClick={OnClick} />
      {/* </Layout> */}
      {/* <Layout> */}
        <MenuIcon To="/destinations" Content="Destination"
          ImgUrl={destinations} OnClick={OnClick} />
        <MenuIcon To="/contact" Content="Contact" ImgUrl={contact}
          OnClick={OnClick} />
      {/* </Layout> */}
    </div>
  )
}