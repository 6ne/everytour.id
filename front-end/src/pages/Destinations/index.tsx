import React from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'
import ContentImage from '../../components/ContentImage'
import harapan from '../../assets/images/islands/harapan/thumbnail.jpg'
import placeholder from '../../assets/images/islands/placeholder.png'

export default () => {
  return (
    <div className={Style.Destinations}>
      <ContentImage To="/destination/harapan" Title="Pulau Harapan" Subtitle="" ImgUrl={harapan} />
      <ContentImage To="/destination/tidung" Title="Pulau Tidung" Subtitle="" ImgUrl={placeholder} />
      <ContentImage To="/destination/pari" Title="Pulau Pari" Subtitle="" ImgUrl={placeholder} />
      <ContentImage To="/destination/pramuka" Title="Pulau Pramuka" Subtitle="" ImgUrl={placeholder} />
      <ContentImage To="/destination/belitung" Title="Pulau Belitung" Subtitle="" ImgUrl={placeholder} />
      <Link to='/contact' className={Style.customLink}>
        <span>Explore More</span>
      </Link>
    </div>
  )
}