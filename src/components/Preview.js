import React, { useEffect } from "react"

export const Preview = (props) => {
    useEffect(()=>{
        const canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        ctx.canvas.width = props.bannerParams.widthValue
        ctx.canvas.height = props.bannerParams.heightValue
        ctx.font=`${props.bannerParams.primaryFontSize}px Arial`
        ctx.fillText(`${props.bannerParams.primaryTitleValue}`, 150, 600)
        ctx.fillStyle=`${props.bannerParams.underlayColors[0]? props.bannerParams.underlayColors[0].color : "lightgrey"}`
        ctx.fillRect(0, 0, props.bannerParams.widthValue, props.bannerParams.heightValue)
        console.log(ctx)
    },[props.bannerParams])

    return (
        <div className = "col pt2">
            <canvas id="canvas">Для работы с программой нужно что-то посвежее. Обновите браузер</canvas>
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