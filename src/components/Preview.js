import React, { useEffect } from "react"

export const Preview = (props) => {

  const params = props.bannerParams

  const underlayColorCreator = (data) => {
    const canvas = document.getElementById("canvas")
    let ctx = canvas.getContext("2d")
    if(params.underlayColors && params.underlayColors.length >1) {
      const grad = ctx.createLinearGradient(0, 0, params.bannerSize.width, params.bannerSize.height)
      data.forEach((col, i)=>{return (grad.addColorStop((1 / (data.length-1) * i), col.color))})
      return grad
    } else {
      return params.underlayColors[0]? params.underlayColors[0].color : "lightgrey"
    }
  }
  
    let image = new Image()
    image.src = `${params.picture.link}`
    image.setAttribute('crossOrigin', 'anonymous')
    
    useEffect(()=>{
        const canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        ctx.canvas.width = params.bannerSize.width
        ctx.canvas.height = params.bannerSize.height

        ctx.fillStyle=underlayColorCreator(params.underlayColors)
        ctx.fillRect(0, 0, params.bannerSize.width, params.bannerSize.height)
      

        image.onload = () => {
          ctx.drawImage(image, params.picture.x, params.picture.y, params.picture.scaleX, params.picture.scaleY)

        }

        params.titles.map(param=>{
          ctx.fillStyle=`${param.fontColor}`
          ctx.font=`${param.fontSize}px Arial`
          ctx.fillText(`${param.title}`, param.x, param.y)           
        })

        

    },[params])

    return (
        <div className = "col pt2">
            <canvas id="canvas" onMouseDown={e=>props.onMouseDown(e)}
                                onMouseUp={e=>props.onMouseUp(e)}
                                onMouseMove={e=>props.onMouseMove(e)} >Для работы с программой нужно что-то посвежее. Обновите браузер</canvas>
        </div>

    )
}