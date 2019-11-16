import React, {CSSProperties} from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'

interface IContentImage {
    To: string,
    Title: string,
    Subtitle: string,
    ImgUrl: string,
    CustomLinkStyle?: string
    CustomContentStyle?: string
}
  
export default ({To, Title, Subtitle, ImgUrl, CustomLinkStyle, CustomContentStyle}: IContentImage) => {
    const backgroundImageStyle: CSSProperties = {
        backgroundImage: `url(${ImgUrl})`
    }
    const style = `${Style.ContentImage} ${CustomContentStyle}`
    return (
        <Link to={To} className={CustomLinkStyle}>
            <div className={style} style={backgroundImageStyle} >
                <div className={Style.text}>
                    <div className={Style.title}>{Title}</div>
                    <div className={Style.subtitle}>{Subtitle}</div>
                </div>
            </div>
        </Link>
    )
}