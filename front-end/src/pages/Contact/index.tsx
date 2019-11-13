import React from 'react'
import Icon from '../../components/Icon'
import { faLine, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export default () => {
  return (
    <div>
      For more information please reach us via:
      <Icon Icon={faLine} Path="https://line.me/ti/p/~commingSoon"/>
      <Icon Icon={faWhatsapp} Path="https://wa.me/6285695693747" />
      <Icon Icon={faInstagram} Path="https://instagram.com/everytour.id" />
      <Icon Icon={faEnvelopeSquare} Path="mailto:contact@findeverytour.com" />
    </div>
  )
}