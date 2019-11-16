import React, {CSSProperties} from 'react'
import Style from './style.module.scss'
import { Link } from 'react-router-dom'


interface IContentImage {
    To: string,
    Title: string,
    Subtitle: string,
    ImgUrl: string,
}
  
export default ({To, Title, Subtitle, ImgUrl}: IContentImage) => {
    const backgroundImageStyle: CSSProperties = {
        backgroundImage: `url(${ImgUrl})`
        // backgroundColor: ImgUrl
    }
    return (
        <Link to={To} >
            <div className={Style.ContentImage} style={backgroundImageStyle} >
                <div className={Style.text}>
                    <div className={Style.title}>{Title}</div>
                    <div className={Style.subtitle}>{Subtitle}</div>
                </div>
            </div>
        </Link>
    )
}