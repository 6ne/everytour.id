import React, { useState } from 'react'
import Style from './style.module.scss'
import Menu from '../Menu'

export default () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu: VoidFunction = () => setOpen(!isOpen)

  return (
    <div className={Style.BurgerContainer}>
        <div className={Style.burger} onClick={toggleMenu}>
            <span className={Style.burgerItem}></span>
            <span className={Style.burgerItem}></span>
            <span className={Style.burgerItem}></span>
        </div>
        <div> { isOpen && <Menu /> } </div>
    </div>
  )
}