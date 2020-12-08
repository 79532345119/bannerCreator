import { useState } from 'react';
import './App.css';
import { Preview } from './components/Preview';
import { Tools } from './components/Tools';

function App() {

const [bannerParams, setBannerParams] = useState({
  widthValue: 600,
  heightValue: 900,
  borderRadiusValue: 15,
  underlayColors: [],
  picLink: 'hei',
  picScale: 99,
  primaryFontSize: 24,
  secondaryFontSize: 14,
  primaryTitleValue: '',
  secondaryTitleValue: '',
  destLink: '',
})

const setBannerSize = (bannerSize) => {
  setBannerParams({   
    ...bannerParams,
    widthValue: bannerSize.widthValue,
    heightValue: bannerSize.heightValue,
    borderRadiusValue: bannerSize.borderRadiusValue}
  )
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
    picLink: link
  })
}

const setPicScale = (scale) => {
  setBannerParams({
    ...bannerParams,
    picScale: scale
  })
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

const setDestLink = (link) => {
  setBannerParams({
    ...bannerParams,
    destLink: link
  })
}

  return (
    <div className = "content">
      <div className="row">
        <Preview bannerParams = {bannerParams} />
        <Tools bannerParams = {bannerParams} setBannerSize = {setBannerSize} 
               onAddUnderlayColor = {setUnderlayColors} onDeleteUnderlayColor = {onDeleteUnderlayColor} 
               setPicLink = {setPicLink} setPicScale = {setPicScale}
               setPrimaryFontSize = {setPrimaryFontSize} setPrimaryTitleValue = {setPrimaryTitleValue}
               setSecondaryFontSize = {setSecondaryFontSize} setSecondaryTitleValue = {setSecondaryTitleValue}
               setDestLink = {setDestLink}
        />
      </div>
    </div>
  );
}

export default App;
