import React, { CSSProperties } from 'react'
import Style from './style.module.scss'

interface IImage {
    ImgUrl: string,
    CustomStyle?: string
}
  
export default ({ImgUrl, CustomStyle}: IImage) => {
    const backgroundImageStyle: CSSProperties = {
        backgroundImage: `url(${ImgUrl})`
    }
    return (
        <div className={Style.Image} style={backgroundImageStyle} ></div>
    )
}