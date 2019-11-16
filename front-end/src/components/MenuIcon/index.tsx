import React, { CSSProperties } from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'

interface IMenuIcon {
  To: string,
  Content: string,
  ImgUrl: string
}

export default ({ To, Content, ImgUrl }: IMenuIcon) => {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage: `url(${ImgUrl})`
  }

  return (
    <Link className={Style.MenuIcon} to={To}>
      <div className={Style.image} style={backgroundImageStyle}></div>
      <div className={Style.text}>{Content}</div>
    </Link>
  )
}