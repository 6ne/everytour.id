import React from 'react'
import Style from './style.module.scss'
import Icon from '../Icon'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

interface IPDFReader {
    Content : string
}

export default ({ Content }: IPDFReader) => {
  return (
    <div className={Style.PDFReader} >
      <Icon Icon={faFilePdf} />
      <div className={Style.text}>{Content}</div>
    </div>
  )
}