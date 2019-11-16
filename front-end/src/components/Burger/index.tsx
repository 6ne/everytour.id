import React, { useState, CSSProperties } from 'react'
import Style from './style.module.scss'
import Menu from '../Menu'

export default () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu: VoidFunction = () => setOpen(!isOpen)

  const NormalTransform : CSSProperties = { transform : 'rotate(0deg)' }
  const Transform45 : CSSProperties = { transform : 'rotate(45deg)' }
  const TransformMin45 : CSSProperties = { transform : 'rotate(-45deg)' }
  const Hidden : CSSProperties = { transform : 'rotate(0deg) scale(0)' } 

  return (
    <div className={Style.BurgerContainer}>
      <div className={Style.burger} onClick={toggleMenu}>
        <span className={Style.burgerItem} style={isOpen !== true ? NormalTransform : Transform45}></span>
        <span className={Style.burgerItem} style={isOpen !== true ? NormalTransform : Hidden}></span>
        <span className={Style.burgerItem} style={isOpen !== true ? NormalTransform : TransformMin45}></span>
      </div>
      <div> { isOpen && <Menu /> } </div>
    </div>
  )
}