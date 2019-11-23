import React from 'react'
import Style from './style.module.scss'
import MenuIcon from '../MenuIcon'
import home from '../../assets/images/icons/home.png'
import about from '../../assets/images/icons/about.png'
import destinations from '../../assets/images/icons/destinations.png'
import contact from '../../assets/images/icons/contact.png'

interface IMenu { OnClick: VoidFunction }

export default ({ OnClick }: IMenu) => {
  return (
    <div className={Style.Menu}>
        <MenuIcon To="/" Content="Home" ImgUrl={home} OnClick={OnClick} />
        <MenuIcon To="/about" Content="About" ImgUrl={about}
          OnClick={OnClick} />
        <MenuIcon To="/destinations" Content="Destination"
          ImgUrl={destinations} OnClick={OnClick} />
        <MenuIcon To="/contact" Content="Contact" ImgUrl={contact}
          OnClick={OnClick} />
    </div>
  )
}