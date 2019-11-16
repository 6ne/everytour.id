import React, { ReactNode } from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'

interface IButton {
  To: string,
  children: ReactNode,
  CustomStyle?: string
}

export default ({ To, children, CustomStyle }: IButton) => {
  const style = `${Style.Button} ${CustomStyle}`

  return (
    <Link to={ To } className={style}> {children} </Link>
  )
}