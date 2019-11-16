import React, { useState, CSSProperties } from 'react'
import Style from './style.module.scss'
import Menu from '../Menu'

export default () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu: VoidFunction = () => setOpen(!isOpen)

  let firstChildStyle: CSSProperties =  { }
  let secondChildStyle: CSSProperties =  { }
  let thirdChildStyle: CSSProperties =  { }

  if ( isOpen ) {
    firstChildStyle = { transform: 'rotate(45deg)' }
    secondChildStyle = { transform: 'scale(0)' }
    thirdChildStyle = { transform: 'rotate(-45deg) '}
  }

  return (
    <div className={Style.BurgerContainer}>
      <div className={Style.burger} onClick={toggleMenu}>
        <span className={Style.burgerItem} style={firstChildStyle}></span>
        <span className={Style.burgerItem} style={secondChildStyle}></span>
        <span className={Style.burgerItem} style={thirdChildStyle}></span>
      </div>
      <div> { isOpen && <Menu OnClick={toggleMenu} /> } </div>
    </div>
  )
}