import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import ContentImage from '../../components/ContentImage';
import Style from './style.module.scss'
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Data from './data.json'
import Image from '../../components/Image'
import ComingSoon from '../comingSoon'

import harapanThumbnail from '../../assets/images/islands/harapan/thumbnail.jpg'
import pariThumbnail from '../../assets/images/islands/pari/thumbnail.jpg'
import tidungThumbnail from '../../assets/images/islands/tidung/thumbnail.jpg'
import pramukaThumbnail from '../../assets/images/islands/pramuka/thumbnail.jpg'

import _harapan3 from '../../assets/images/islands/harapan/harapan3.jpg'
import _harapan7 from '../../assets/images/islands/harapan/harapan7.jpg'
import _harapan8 from '../../assets/images/islands/harapan/harapan8.jpg'
import _harapan9 from '../../assets/images/islands/harapan/harapan9.jpg'
import _harapan10 from '../../assets/images/islands/harapan/harapan10.jpg'
import _harapan11 from '../../assets/images/islands/harapan/harapan11.jpg'
import _harapan12 from '../../assets/images/islands/harapan/harapan12.jpg'
import _harapan15 from '../../assets/images/islands/harapan/harapan15.jpg'
import _harapan19 from '../../assets/images/islands/harapan/harapan19.jpg'

import _pari2 from '../../assets/images/islands/pari/pari2.jpg'
import _pari4 from '../../assets/images/islands/pari/pari4.jpg'
import _pari5 from '../../assets/images/islands/pari/pari5.jpg'
import _pari6 from '../../assets/images/islands/pari/pari6.jpg'
import _pari7 from '../../assets/images/islands/pari/pari7.jpg'
import _pari8 from '../../assets/images/islands/pari/pari8.jpg'
import _pari9 from '../../assets/images/islands/pari/pari9.jpg'
import _pari10 from '../../assets/images/islands/pari/pari10.jpg'
import _pari11 from '../../assets/images/islands/pari/pari11.jpg'

import _pramuka2 from '../../assets/images/islands/pramuka/pramuka2.jpg'
import _pramuka3 from '../../assets/images/islands/pramuka/pramuka3.jpg'
import _pramuka4 from '../../assets/images/islands/pramuka/pramuka4.jpg'
import _pramuka5 from '../../assets/images/islands/pramuka/pramuka5.jpg'
import _pramuka6 from '../../assets/images/islands/pramuka/pramuka6.jpg'

import _tidung1 from '../../assets/images/islands/tidung/tidung1.jpg'
import _tidung2 from '../../assets/images/islands/tidung/tidung2.jpg'
import _tidung3 from '../../assets/images/islands/tidung/tidung3.jpg'
import _tidung4 from '../../assets/images/islands/tidung/tidung4.jpg'
import _tidung5 from '../../assets/images/islands/tidung/tidung5.jpg'

export default () => {
  let { name } = useParams();
  let key = 0;

  let images = new Map(Object.entries({
    harapan: harapanThumbnail,
    pari: pariThumbnail,
    belitung: tidungThumbnail,
    pramuka: pramukaThumbnail,
    tidung: tidungThumbnail
  }))
  
  let map = new Map(Object.entries(Data))
  
  if (!!!map.has(name!)) return <Redirect to="/no-where" />

  const pageData: any = map.get(name!)
  
  const title = pageData.title
  const subtitle = pageData.subtitle
  const img = images.get(name!) || ""

  const pdfList = pageData.pdfList

  let imgList: Array<string> = []
  let description: string = ""

  if (name === 'harapan') {
    imgList = [
      _harapan3, _harapan7, _harapan8, _harapan9, _harapan10, _harapan11,
      _harapan12, _harapan15, _harapan19
    ]
  } else if (name === 'tidung') {
    imgList = [
      _tidung1, _tidung2, _tidung3, _tidung4, _tidung5
    ]
  } else if (name === 'pari') {
    imgList = [
      _pari2, _pari4, _pari5, _pari6, _pari7, _pari8, _pari9, _pari10, _pari11
    ]
  } else if (name === 'pramuka') {
    imgList = [
      _pramuka2, _pramuka3, _pramuka4, _pramuka5, _pramuka6, 
    ]
  } else if (name === 'belitung') {
    imgList = []
  }

  if (img === "") {
    return <ComingSoon />
  }

  return (
    <div className={Style.Container}>
      <ContentImage To="/" Title={title} Subtitle={subtitle} ImgUrl={img} CustomLinkStyle={Style.Linking} CustomContentStyle={Style.ContentImage}/>

      <Layout customStyles={Style.description}>{description}</Layout>
      
      <Layout Col customStyles={Style.PDFIconContainer}>
        {
          pdfList.map((pdf: any) => 
            <Icon key={++key} CustomStyles={Style.PDFIcon} Path={pdf.url} Text={pdf.text} Icon={faFilePdf} />
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