import React from 'react'
import Style from './style.module.scss'
import Icon from '../../components/Icon'
import { faLine, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const isMobileDetected: Function = (): boolean => {
  return window.navigator.userAgent.toLowerCase().includes("mobi")
}

export default () => {
  let linePath: string = 'https://line.me/ti/p/~comingSoon'
  let whatsappPath: string = 'https://wa.me/6285695693747'
  let instagramPath: string = 'https://instagram.com/everytour.id'

  if (isMobileDetected()) {
    linePath = 'line://ti/p/comingSoon'
    whatsappPath = 'whatsapp://send?phone=6285695693747'
    instagramPath = 'instagram://user?username=everytour.id'
  }
  
  return (
    <div className={Style.Contact}>
      For more information please reach us via:
      <div className={Style.icons}>
        <Icon Icon={faLine} Path={linePath} CustomStyles={Style.customIcon}/>
        <Icon Icon={faWhatsapp} Path={whatsappPath} CustomStyles={Style.customIcon}/>
        <Icon Icon={faInstagram} Path={instagramPath} CustomStyles={Style.customIcon}/>
        <Icon Icon={faEnvelopeSquare} Path="mailto:contact@findeverytour.com" CustomStyles={Style.customIcon}/>
      </div>
    </div>
  )
}