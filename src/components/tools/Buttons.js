import React from "react"
import html2canvas from 'html2canvas'


import {copyHTML} from "../../bll/exports"

 const exportToPng = ()=>{
    const myCanvas = document.getElementById("canvas")
    const myCtx = myCanvas.getContext("2d")
    const img = myCtx.toDataURL("image/png")
    
    console.log(img)
}

const saveAsPNG = () => {
    html2canvas(document.getElementById('canvas'))
   
  }

export const Buttons = () => {
    return (
        <div className = "tools_elem">
            <button className="btn" onClick = {saveAsPNG}>Сохранить в png</button>
            <button className="btn" onClick={copyHTML}>Скопировать баннер в буфер как html</button>
            <button className="btn">Скопировать конфигурацию как json</button>
        </div>

    )
}


