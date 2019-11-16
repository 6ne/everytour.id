import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ContentImage from '../../components/ContentImage';
import sunset from '../../assets/img/sunset.jpg'
import Style from './style.module.scss'
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/Image'
import pharapan from '../../assets/img/pulau-harapan.jpg'
import bunaken from '../../assets/img/bunaken.jpg'
import safari from '../../assets/img/sdzsafaripark-meta.jpg'
import ptidung from '../../assets/img/wisata-pulau-tidung.jpeg'
import sunrise from '../../assets/img/sunrise.png'

export default () => {
  let { name } = useParams();
  return (
    <div>
      { console.log(name) }
      <ContentImage To="/" Title="Pulau A" Subtitle="Lorem ipsum dolor" ImgUrl={sunset} CustomLinkStyle={Style.Linking} CustomContentStyle={Style.ContentImage}/>
      
      {/* tinggal kasi margin antar pdf sama apus pdfreader component */}
      <Layout>
        <Icon Path="https://somewherethepdfbelongsto.pdf" Text="ID"
          Icon={faFilePdf} />
        <Icon Path="https://somewherethepdfbelongsto.pdf" Text="EN"
          Icon={faFilePdf} />
      </Layout>
      <Layout Col={true} customStyles={Style.ImageContainer}>
        <Layout Col={false} customStyles={Style.ImageItemContainer}>
          <Image ImgUrl={sunset} />
          <Image ImgUrl={pharapan} />
          <Image ImgUrl={safari} />
        </Layout>
        <Layout Col={false} customStyles={Style.ImageItemContainer}>
          <Image ImgUrl={bunaken} />
          <Image ImgUrl={ptidung} />
          <Image ImgUrl={sunrise} />
        </Layout>
        <Layout Col={false} customStyles={Style.ImageItemContainer}>
          <Image ImgUrl={safari} />
          <Image ImgUrl={sunset} />
          {/* <Image ImgUrl={pharapan} /> */}
        </Layout>
      </Layout>
    </div>
  )
}