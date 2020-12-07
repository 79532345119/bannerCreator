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
  picLink: '',
  picScale: 100,
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


  return (
    <div className = "content">
      <div className="row">
        <Preview />
        <Tools bannerParams = {bannerParams} setBannerSize = {setBannerSize} onAddUnderlayColor = {setUnderlayColors} underlayColor = {bannerParams.underlayColors} onDeleteUnderlayColor = {onDeleteUnderlayColor} />
      </div>
    </div>
  );
}

export default App;
