import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import ContentImage from '../../components/ContentImage';
import Style from './style.module.scss'
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Data from './data.json'
import Image from '../../components/Image'
import sunset from '../../assets/img/sunset.jpg'
import pharapan from '../../assets/img/pulau-harapan.jpg'
import bunaken from '../../assets/img/bunaken.jpg'
import safari from '../../assets/img/sdzsafaripark-meta.jpg'
import ptidung from '../../assets/img/wisata-pulau-tidung.jpg'
import sunrise from '../../assets/img/sunrise.png'

import _harapan3 from '../../assets/img/harapan/harapan3.jpg'
import _harapan7 from '../../assets/img/harapan/harapan7.jpg'
import _harapan8 from '../../assets/img/harapan/harapan8.jpg'
import _harapan9 from '../../assets/img/harapan/harapan9.jpg'
import _harapan10 from '../../assets/img/harapan/harapan10.jpg'
import _harapan11 from '../../assets/img/harapan/harapan3.jpg'
import _harapan12 from '../../assets/img/harapan/harapan11.jpg'
import _harapan15 from '../../assets/img/harapan/harapan15.jpg'
import _harapan19 from '../../assets/img/harapan/harapan19.jpg'

export default () => {
  console.log(bunaken)
  let { name } = useParams();
  let key = 0;

  let images = new Map(Object.entries({
    harapan: sunset,
    tidung: pharapan,
    pari: bunaken,
    pramuka: safari,
    belitung: ptidung
  }))
  
  let map = new Map(Object.entries(Data))
  
  if (!!!map.has(name!)) return <Redirect to="/no-where" />

  const pageData: any = map.get(name!)
  
  const title = pageData.title
  const subtitle = pageData.subtitle
  const img = images.get(name!) || ""

  const pdfList = pageData.pdfList

  let imgList: Array<string> = []

  if (name === 'harapan') {
    imgList = [
      _harapan3, _harapan7, _harapan8, _harapan9, _harapan10, _harapan11,
      _harapan12, _harapan15, _harapan19
    ]
  } else if (name === 'tidung') {
    imgList = []
  } else if (name === 'pari') {
    imgList = []
  } else if (name === 'pramuka') {
    imgList = []
  } else if (name === 'belitung') {
    imgList = []
  }

  return (
    <div className={Style.Container}>
      <ContentImage To="/" Title={title} Subtitle={subtitle} ImgUrl={img} CustomLinkStyle={Style.Linking} CustomContentStyle={Style.ContentImage}/>
      
      <Layout customStyles={Style.PDFIconContainer}>
        {
          pdfList.map((pdf: any) => 
            <Icon key={++key} CustomStyles={Style.PDFIcon} Path={pdf.url} Text={pdf.text}
              Icon={faFilePdf} />
          )
        }
      </Layout>

      {
        imgList.length === 0 ?
        <div>Content Coming soon</div> :
        <Layout customStyles={Style.ImageContainer}>
          {
            imgList.map(img => 
              <Image key={++key} ImgUrl={img} />
            )
          }
        </Layout>
      }
    </div>
  )
}