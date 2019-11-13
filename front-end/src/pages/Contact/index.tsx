import React from 'react'
import Icon from '../../components/Icon'
import { faLine, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default () => {
  // to detech mobile version opened
  // window.navigator.userAgent.toLowerCase().includes("mobi")
  return (
    <div>
      <Link to='/'>Home</Link>
      For more information please reach us via:
      {/*line://oaMessage/{LINE_id}/?{text_message} */}
      <Icon Icon={faLine} Path="https://line.me/ti/p/~commingSoon"/>
      <Icon Icon={faWhatsapp} Path="whatsapp://send?phone=6285695693747" />
      <Icon Icon={faInstagram} Path="https://instagram.com/everytour.id" />
      <Icon Icon={faEnvelopeSquare} Path="mailto:contact@findeverytour.com" />
    </div>
  )
}