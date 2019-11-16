import React, { CSSProperties } from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'

interface IImage {
    ImgUrl: string,
    CustomStyle?: string
}
  
export default ({ImgUrl, CustomStyle}: IImage) => {
    const backgroundImageStyle: CSSProperties = {
        backgroundImage: `url(${ImgUrl})`
    }
    return (
        <div className={Style.ImageContainer} >
            <div className={Style.image} style={backgroundImageStyle} ></div>
        </div>
    )
}