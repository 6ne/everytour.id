import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ContentImage from '../../components/ContentImage';
import sunset from '../../assets/img/sunset.jpg'
import Style from './style.module.scss'
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import PDFReader from '../../components/PDFReader'

export default () => {
  let { name } = useParams();
  return (
    <div>
      { console.log(name) }
      <ContentImage To="/" Title="Pulau A" Subtitle="Lorem ipsum dolor" ImgUrl={sunset} CustomLinkStyle={Style.Linking} CustomContentStyle={Style.ContentImage}/>
      {/* { name } */}

      {/* belum ngelink */}
      <Layout Col={false}>
        <PDFReader Content="ID" />
        <PDFReader Content="EN" />
      </Layout>
    </div>
  )
}