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
    link: "data:image/jpeg;base64,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", /* https://www.pngkit.com/png/full/1-19983_new-car-png-car-png-for-picsart.png */
    scaleX: 300,
    scaleY: 200,
    x: 150,
    y: 100,
    isSelected: false
  },
  titles:[
    { id: Date.now(),
      title: "первая строка",
      fontSize: 50,
      fontColor: "#000000",
      x:100,
      y:(900 * 0.7),
      isSelected: false
    }
  ], 
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
  }  else {
    bannerParams.titles.forEach(title=>{
      console.log("title.y: "+ title.y + " title.id: "+title.id + " data.clientY: "+data.clientY)
        if(title.y +10 >= data.clientY && title.y + 10 -title.fontSize <= data.clientY) {
          setBannerParams({
            ...bannerParams,
            titles: bannerParams.titles.map(item=>{

              if(item.id===title.id) {
                return {
                  ...item,
                  isSelected: true
                }
              }
              else{
                return {
                  ...item
                }
              }
            })
          })
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
      },
      titles: bannerParams.titles.map(item=>{
          return {
            ...item,
            isSelected: false
          }      
      })
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
  } else {
    
    bannerParams.titles.forEach(title=>{
        if(title.isSelected) {
          setBannerParams({
            ...bannerParams,
            titles: bannerParams.titles.map(item=>{

              if(item.id===title.id) {
                return {
                  ...item,
                  x:item.x+data.movementX,
                  y:item.y+data.movementY,
                }
              }
              else{
                return {
                  ...item
                }
              }
            })
          })
        }
    })
  }
}

const onTitleInput = (title, id) => {
  setBannerParams({
    ...bannerParams,
    titles: bannerParams.titles.map(item=>{

      if(item.id===id) {
        return {
          ...item,
          title
        }
      }
      else{
        return {
          ...item
        }
      }
    })
  })
}

const setFontSize = (fontSize, id) => {
  setBannerParams({
    ...bannerParams,
    titles: bannerParams.titles.map(item=>{

      if(item.id===id) {
        return {
          ...item,
          fontSize
        }
      }
      else{
        return {
          ...item
        }
      }
    })
  })
}

const setFontColor = (fontColor, id) => {
  setBannerParams({
    ...bannerParams,
    titles: bannerParams.titles.map(item=>{

      if(item.id===id) {
        return {
          ...item,
          fontColor
        }
      }
      else{
        return {
          ...item
        }
      }
    })
  })
}

const onAddLine = () => {
  const newTitle = {
    id: Date.now(),
    title: "",
    fontSize: bannerParams.titles[bannerParams.titles.length-1].fontSize,
    fontColor: bannerParams.titles[bannerParams.titles.length-1].fontColor,
    x: bannerParams.titles[bannerParams.titles.length-1].x,
    y: ((bannerParams.titles[bannerParams.titles.length-1].y + bannerParams.titles[bannerParams.titles.length-1].fontSize*2) < bannerParams.bannerSize.height - 50 ) ? bannerParams.titles[bannerParams.titles.length-1].y + bannerParams.titles[bannerParams.titles.length-1].fontSize*2 : bannerParams.bannerSize.height - 50
    }
  setBannerParams({
    ...bannerParams,
    titles: [...bannerParams.titles, newTitle]
    })    
}

const onLineDelete = (id) => {
  
 setBannerParams({
   ...bannerParams,
   titles: bannerParams.titles.filter(title=> {
     return title.id !==id
   })
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

               onTitleInput = {onTitleInput}
               setFontColor = {setFontColor}
               setFontSize = {setFontSize}
               onAddLine = {onAddLine}
               onLineDelete = {onLineDelete}

               setDestLink = {setDestLink}
        />
      </div>
    </div>
  );
}

export default App;
