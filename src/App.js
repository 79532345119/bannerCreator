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
    scaleX: 100,
    scaleY: 100,
    x: 10,
    y: 10,
    isSelected: false
  },
  titles:[], 
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

const setPicScaleX = (scale) => {
  setBannerParams({
    ...bannerParams,
    picture: {
      ...bannerParams.picture,
      scaleX: scale
    }
  })
}

const setPicScaleY = (scale) => {
  setBannerParams({
    ...bannerParams,
    picture: {
      ...bannerParams.picture,
      scaleY: scale
    }
  })
}

const onMouseDown = (data) => {
  if(bannerParams.picture.scaleY + bannerParams.picture.y + 10 >= data.clientY) {
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

const setFontSize = (fs) => {
  setBannerParams({
    ...bannerParams,
    fontSize: fs
  })
}

const setFontColor = (color) => {
  setBannerParams({
    ...bannerParams,
    fontColor: color
  })
}
const addTitle = (title) => {
  const newTitle = {
    id: Date.now(),
    title: title,
    fontSize: 50,
    fontColor: "#000000",
    x:100,
    y:200
  }
  setBannerParams({
    ...bannerParams,
    titles: [...bannerParams.titles, newTitle]
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
               setPicLink = {setPicLink} setPicScaleX = {setPicScaleX} setPicScaleY = {setPicScaleY}
               addTitle = {addTitle} setFontSize = {setFontSize} setFontColor = {setFontColor}
               setDestLink = {setDestLink}
        />
      </div>
    </div>
  );
}

export default App;
