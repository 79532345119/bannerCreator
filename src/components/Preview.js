import React, { useEffect } from "react"

export const Preview = (props) => {

  const underlayColorCreator = (data) => {
    const canvas = document.getElementById("canvas")
    let ctx = canvas.getContext("2d")
    if(props.bannerParams.underlayColors && props.bannerParams.underlayColors.length >1) {
      const grad = ctx.createLinearGradient(0, 0, props.bannerParams.widthValue, props.bannerParams.heightValue)
      data.forEach((col, i)=>{return (grad.addColorStop((1 / (data.length-1) * i), col.color))})
      return grad
    } else {
      return props.bannerParams.underlayColors[0]? props.bannerParams.underlayColors[0].color : "lightgrey"
    }
  }

    useEffect(()=>{
        const canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        ctx.canvas.width = props.bannerParams.widthValue
        ctx.canvas.height = props.bannerParams.heightValue

        ctx.fillStyle=underlayColorCreator(props.bannerParams.underlayColors)

        ctx.fillRect(0, 0, props.bannerParams.widthValue, props.bannerParams.heightValue)
        ctx.fillStyle=`${props.bannerParams.primaryFontSizeColor}`
        ctx.font=`${props.bannerParams.primaryFontSize}px Arial`
        ctx.fillText(`${props.bannerParams.primaryTitleValue}`, 150, 300)
        ctx.fillStyle=`${props.bannerParams.secondaryFontSizeColor}`
        ctx.font=`${props.bannerParams.secondaryFontSize}px Arial`
        ctx.fillText(`${props.bannerParams.secondaryTitleValue}`, 150, 450)
        ctx.fillStyle=`${props.bannerParams.secondary2FontSizeColor}`
        ctx.font=`${props.bannerParams.secondary2FontSize}px Arial`
        ctx.fillText(`${props.bannerParams.secondary2TitleValue}`, 150, 600)
        
        let image = new Image()
        image.src = "https://www.pngkit.com/png/full/1-19983_new-car-png-car-png-for-picsart.png"
        image.onload = () => {
          ctx.drawImage(image, 10, 10);
        }
        


        console.log(ctx)
    },[props.bannerParams])

    return (
        <div className = "col pt2">
            <canvas id="canvas" onMouseDown={e=>console.log(e)} >Для работы с программой нужно что-то посвежее. Обновите браузер</canvas>
        </div>

    )
}

/* useEffect(() => {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
      let image = new Image();
    image.src = Avito;
    image.onload = function () {
      context.canvas.width = image.width;
      context.canvas.height = image.height;
      context.fillStyle = color.hex;
      context.fillRect(0, 0, image.width, image.height);
      context.drawImage(image, 0, 0);
      context.font = `bold ${fontSize}px Arial`;
      context.fillStyle = isColor(textColor) ? textColor : 'black';
      threeLines(text.length,context,image)
    }
  }, [color,text,textColor,fontSize]); */