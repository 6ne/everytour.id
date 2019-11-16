import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ContentImage from '../../components/ContentImage';
import sunset from '../../assets/img/sunset.jpg'
import Style from './style.module.scss'
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import PDFReader from '../../components/PDFReader'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

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
    </div>
  )
}