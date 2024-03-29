import React from 'react'
import Style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Layout from '../Layout'

interface IIcon {
  Icon: IconDefinition,
  Path?: string,
  Text?: string,
  CustomStyles?: string
  Col?: boolean
}

export default ({ Icon, Path, Text, CustomStyles, Col }: IIcon) => {
  return Path ?
  (
    <a target="_blank" rel="noopener noreferrer" href={Path} className={CustomStyles}>
      <Layout customStyles={Col ? Style.Col : Style.Row}>
        <FontAwesomeIcon icon={Icon} className={Style.Icon} />
        { Text && <span>{Text}</span> }
      </Layout>
    </a>
  ) :
  (
    <span>
      <FontAwesomeIcon icon={Icon} className={Style.Icon} />
      { Text && <span>{Text}</span> }
    </span>
  )
}