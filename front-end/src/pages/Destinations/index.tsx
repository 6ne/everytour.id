import React from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'
import ContentImage from '../../components/ContentImage'
import harapan from '../../assets/images/islands/harapan/thumbnail.jpg'
import pari from '../../assets/images/islands/pari/thumbnail.jpg'
import tidung from '../../assets/images/islands/tidung/thumbnail.jpg'
import pramuka from '../../assets/images/islands/pramuka/thumbnail.jpg'
import placeholder from '../../assets/images/islands/placeholder.png'

export default () => {
  return (
    <div className={Style.Destinations}>
      <ContentImage To="/destination/belitung" Title="Pulau Belitung" Subtitle="" ImgUrl={placeholder} />
      <ContentImage To="/destination/harapan" Title="Pulau Harapan" Subtitle="" ImgUrl={harapan} />
      <ContentImage To="/destination/pari" Title="Pulau Pari" Subtitle="" ImgUrl={pari} />
      <ContentImage To="/destination/tidung" Title="Pulau Tidung" Subtitle="" ImgUrl={tidung} />
      <ContentImage To="/destination/pramuka" Title="Pulau Pramuka" Subtitle="" ImgUrl={pramuka} />
      <Link to='/contact' className={Style.customLink}>
        <span>Explore More</span>
      </Link>
    </div>
  )
}