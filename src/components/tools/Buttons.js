import React from "react"
import html2canvas from 'html2canvas'


import {copyHTML} from "../../bll/exports"

const saveAsPNG = () => {
    html2canvas(document.getElementById('canvas')).then(function(canvas) {
        document.body.appendChild(canvas)
    })
   
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


