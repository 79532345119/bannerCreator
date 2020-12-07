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

const [colors, setColors] = useState([])

const setUnderlayColors = (color) => {
  debugger
  const newColor = {
    id: Date.now(),
    color: color
  }
  setColors(
    [...colors, newColor]
  )
  setBannerParams({
    ...bannerParams,
    ...bannerParams.underlayColors, newColor
  }
  )
}


  return (
    <div className = "content">
      <div className="row">
        <Preview />
        <Tools bannerParams = {bannerParams} setBannerSize = {setBannerSize} onAddUnderlayColor = {setUnderlayColors} underlayColor = {bannerParams.underlayColors} />
      </div>
    </div>
  );
}

export default App;
