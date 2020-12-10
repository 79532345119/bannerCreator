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



    useEffect(()=>{
        const canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        ctx.canvas.width = params.bannerSize.width
        ctx.canvas.height = params.bannerSize.height

        ctx.fillStyle=underlayColorCreator(params.underlayColors)

        ctx.fillRect(0, 0, params.bannerSize.width, params.bannerSize.height)

        
        let image = new Image()
        image.src = `${params.picture.link}`
        image.onload = () => {
          ctx.drawImage(image, params.picture.x, params.picture.y, params.picture.scaleX, params.picture.scaleY);
          ctx.fillStyle=`${params.primaryFontSizeColor}`
          ctx.font=`${params.primaryFontSize}px Arial`
          ctx.fillText(`${params.primaryTitleValue}`, 150, 300)
          ctx.fillStyle=`${params.secondaryFontSizeColor}`
          ctx.font=`${params.secondaryFontSize}px Arial`
          ctx.fillText(`${params.secondaryTitleValue}`, 150, 450)
          ctx.fillStyle=`${params.secondary2FontSizeColor}`
          ctx.font=`${params.secondary2FontSize}px Arial`
          ctx.fillText(`${params.secondary2TitleValue}`, 150, 600)
        }
        


        console.log(ctx)
    },[params])

    return (
        <div className = "col pt2">
            <canvas id="canvas" onMouseDown={e=>props.onMouseDown(e)}
                                onMouseUp={e=>props.onMouseUp(e)}
                                onMouseMove={e=>props.onMouseMove(e)} >Для работы с программой нужно что-то посвежее. Обновите браузер</canvas>
        </div>

    )
}