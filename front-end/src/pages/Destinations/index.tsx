import React from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'
import ContentImage from '../../components/ContentImage'
import sunset from '../../assets/img/sunset.jpg'
import pharapan from '../../assets/img/pulau-harapan.jpg'
import bunaken from '../../assets/img/bunaken.jpg'
import safari from '../../assets/img/sdzsafaripark-meta.jpg'
import ptidung from '../../assets/img/wisata-pulau-tidung.jpeg'
import Button from '../../components/Button'
export default () => {
  return (
    <div className={Style.Destinations}>
      {/* <div className={Style.heading}>
        <span>Destinations</span>
      </div> */}
      <ContentImage To="/destination/pulauA" Title="Pulau A" Subtitle="Lorem ipsum dolor" ImgUrl={sunset} />
      <ContentImage To="/destination/pulauB" Title="Pulau B" Subtitle="Lorem ipsum dolor" ImgUrl={pharapan} />
      <ContentImage To="/destination/pulauC" Title="Pulau C" Subtitle="Lorem ipsum dolor" ImgUrl={bunaken} />
      <ContentImage To="/destination/pulauD" Title="Pulau D" Subtitle="Lorem ipsum dolor" ImgUrl={safari} />
      <ContentImage To="/destination/pulauE" Title="Pulau E" Subtitle="Lorem ipsum dolor" ImgUrl={ptidung} />
      <Button To="/contact" children="Explore More" CustomStyle={Style.customButton} />
      {/* <Link to='/contact' className={Style.card}>
        More destination
      </Link> */}
    </div>
  )
}