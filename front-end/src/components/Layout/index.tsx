import React, { ReactNode } from 'react'
import Style from './style.module.scss'

interface ILayout {
  Col?: boolean,
  children: ReactNode,
  customStyles?: string
}

export default ({ Col, children, customStyles }: ILayout) => {
  const direction = Col ? Style.col : Style.row
  const style = `${Style.Layout} ${direction} ${customStyles}`

  return (
    <div className={style}> {children} </div>
  )
}