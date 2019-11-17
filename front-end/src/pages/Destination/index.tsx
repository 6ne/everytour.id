import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import ContentImage from '../../components/ContentImage';
import Style from './style.module.scss'
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Data from './data.json'
import sunset from '../../assets/img/sunset.jpg'
import pharapan from '../../assets/img/pulau-harapan.jpg'
import bunaken from '../../assets/img/bunaken.jpg'
import safari from '../../assets/img/sdzsafaripark-meta.jpg'
import ptidung from '../../assets/img/wisata-pulau-tidung.jpg'

export default () => {
  let { name } = useParams();

  let images = new Map(Object.entries({
    pulauA: sunset,
    pulauB: pharapan,
    pulauC: bunaken,
    pulauD: safari,
    pulauE: ptidung
  }))
  
  let map = new Map(Object.entries(Data))
  
  if (!!!map.has(name!)) return <Redirect to="/no-where" />

  const pageData: any = map.get(name!)
  
  const title = pageData.title
  const subtitle = pageData.subtitle
  const img = images.get(name!) || ""

  return (
    <div>
      <ContentImage To="/" Title={title} Subtitle={subtitle} ImgUrl={img} CustomLinkStyle={Style.Linking} CustomContentStyle={Style.ContentImage}/>
      
      {/* tinggal kasi margin antar pdf sama apus pdfreader component */}
      <Layout>
        <Icon Path="https://somewherethepdfbelongsto.pdf" Text="ID"
          Icon={faFilePdf} />
        <Icon Path="https://somewherethepdfbelongsto.pdf" Text="EN"
          Icon={faFilePdf} />
      </Layout>
    </div>
  )
}