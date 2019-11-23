import React from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'
import ContentImage from '../../components/ContentImage'
import sunset from '../../assets/img/sunset.jpg'
import pharapan from '../../assets/img/pulau-harapan.jpg'
import bunaken from '../../assets/img/bunaken.jpg'
import safari from '../../assets/img/sdzsafaripark-meta.jpg'
import ptidung from '../../assets/img/wisata-pulau-tidung.jpg'
import Icon from '../../components/Icon'
import {faCompass} from '@fortawesome/free-solid-svg-icons'
import Layout from '../../components/Layout'

export default () => {
  return (
    <div className={Style.Destinations}>
      <ContentImage To="/destination/harapan" Title="Pulau Harapan" Subtitle="" ImgUrl={sunset} />
      <ContentImage To="/destination/tidung" Title="Pulau Tidung" Subtitle="" ImgUrl={pharapan} />
      <ContentImage To="/destination/pari" Title="Pulau Pari" Subtitle="" ImgUrl={bunaken} />
      <ContentImage To="/destination/pramuka" Title="Pulau Pramuka" Subtitle="" ImgUrl={safari} />
      <ContentImage To="/destination/belitung" Title="Pulau Belitung" Subtitle="" ImgUrl={ptidung} />
      <Link to='/contact' className={Style.customLink}>
        <span>Explore More</span>
      </Link>
    </div>
  )
}