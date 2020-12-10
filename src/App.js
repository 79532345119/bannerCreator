import { useState } from 'react';
import './App.css';
import { Preview } from './components/Preview';
import { Tools } from './components/Tools';

function App() {

const [bannerParams, setBannerParams] = useState({
  bannerSize: {
    width: 600,
    height: 900,
    borderRadius: 15,
    ratio: 1
  }, 
  underlayColors: [],
  picture: {
    link: "https://www.pngkit.com/png/full/1-19983_new-car-png-car-png-for-picsart.png",
    scale: 99,
    x: 10,
    y: 10,
    isSelected: false
  },
  primaryFontSize: 24,
  secondaryFontSize: 14,
  secondary2FontSize: 14,
  primaryFontSizeColor:"#000000",
  secondaryFontSizeColor:"#000000",
  secondary2FontSizeColor:"#000000",
  primaryTitleValue: '',
  secondaryTitleValue: '',
  secondary2TitleValue: '',
  destLink: '',
})

const setBannerSize = (bannerSize) => {

  setBannerParams({
    ...bannerParams,
    bannerSize: bannerSize 
  })
}

const setUnderlayColors = (color) => {
  const newColor = {
    id: Date.now(),
    color: color
  }
  setBannerParams(
{    ...bannerParams,
     underlayColors: [...bannerParams.underlayColors, newColor]
    }
  )
}

const onDeleteUnderlayColor = (id) => {
  setBannerParams(
{    ...bannerParams,
  underlayColors: bannerParams.underlayColors.filter(underlayColor=> {
      return underlayColor.id !== id
    })}
  )
}

const setPicLink = (link) => {
  setBannerParams({
    ...bannerParams,
    picture: {
      ...bannerParams.picture,
      link
    }
  })
}

const setPicScale = (scale) => {
  setBannerParams({
    ...bannerParams,
    picture: {
      ...bannerParams.picture,
      scale
    }
  })
}

const onMouseDown = (data) => {
  if(bannerParams.picture.scale * bannerParams.bannerSize.ratio + bannerParams.picture.y + 10 >= data.clientY) {
    setBannerParams({
      ...bannerParams,
      picture: {
        ...bannerParams.picture,
        isSelected: true
      }
    })
  }
}

const onMouseUp = () => {
    setBannerParams({
      ...bannerParams,
      picture: {
        ...bannerParams.picture,
        isSelected: false
      }
    })
}

const onMouseMove = (data) => {
  if(bannerParams.picture.isSelected) {
    setBannerParams({
      ...bannerParams,
      picture: {
        ...bannerParams.picture,
        x: bannerParams.picture.x+data.movementX,
        y: bannerParams.picture.y+data.movementY
      }
    })
  } 
}

const setPrimaryFontSize = (fs) => {
  setBannerParams({
    ...bannerParams,
    primaryFontSize: fs
  })
}

const setPrimaryTitleValue = (title) => {
  setBannerParams({
    ...bannerParams,
    primaryTitleValue: title
  })
}

const setPrimaryFontSizeColor = (color) => {
  setBannerParams({
    ...bannerParams,
    primaryFontSizeColor: color  
  })
}

const setSecondaryFontSize = (fs) => {
  setBannerParams({
    ...bannerParams,
    secondaryFontSize: fs
  })
}

const setSecondaryTitleValue = (title) => {
  setBannerParams({
    ...bannerParams,
    secondaryTitleValue: title
  })
}
const setSecondaryFontSizeColor = (color) =>  {
  setBannerParams({
    ...bannerParams,
    secondaryFontSizeColor: color
  })
}
const setSecondary2FontSize = (fs) => {
  setBannerParams({
    ...bannerParams,
    secondary2FontSize: fs
  })
}

const setSecondary2TitleValue = (title) => {
  setBannerParams({
    ...bannerParams,
    secondary2TitleValue: title
  })
}
const setSecondary2FontSizeColor = (color) =>  {
  setBannerParams({
    ...bannerParams,
    secondary2FontSizeColor: color
  })
}

const setDestLink = (link) => {
  setBannerParams({
    ...bannerParams,
    destLink: link
  })
}

  return (
    <div className = "content">
      <div className="row">
        <Preview bannerParams = {bannerParams} 
                 onMouseDown = {onMouseDown} onMouseUp = {onMouseUp} onMouseMove = {onMouseMove}
        />
        <Tools bannerParams = {bannerParams} setBannerSize = {setBannerSize} 
               onAddUnderlayColor = {setUnderlayColors} onDeleteUnderlayColor = {onDeleteUnderlayColor} 
               setPicLink = {setPicLink} setPicScale = {setPicScale}
               setPrimaryFontSize = {setPrimaryFontSize} setPrimaryTitleValue = {setPrimaryTitleValue}
               setSecondaryFontSize = {setSecondaryFontSize} setSecondaryTitleValue = {setSecondaryTitleValue}
               setSecondary2FontSize = {setSecondary2FontSize} setSecondary2TitleValue = {setSecondary2TitleValue}
               setPrimaryFontSizeColor = {setPrimaryFontSizeColor} setSecondaryFontSizeColor={setSecondaryFontSizeColor}
               setSecondary2FontSizeColor={setSecondary2FontSizeColor}
               setDestLink = {setDestLink}
        />
      </div>
    </div>
  );
}

export default App;
