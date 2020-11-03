import React from 'react'
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once

const images = [
    'http://placeimg.com/1200/800/nature',
    'http://placeimg.com/800/1200/nature',
    'http://placeimg.com/1920/1080/nature',
    'http://placeimg.com/1500/500/nature',
  ];


export const Picture = () => {
    return (
        <div>
            <Lightbox images={images}></Lightbox>
        </div>
    )
}

export default Picture
