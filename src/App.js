import { useState } from 'react';
import {data} from './bll/data'
import './App.css';
import { Preview } from './components/Preview';
import { Tools } from './components/Tools';


function App() {

const [bannerParams, setBannerParams] = useState(data)

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

const exportToJSON = () => {
  navigator.clipboard.writeText(JSON.stringify(bannerParams)).then(()=>alert("скопировано"))
  .catch(() => {
    alert('что-то пошло не так')
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
               exportToJSON = {exportToJSON}
        />
      </div>
    </div>
  );
}

export default App;
