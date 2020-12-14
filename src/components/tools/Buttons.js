import React from "react"
import { saveAsPNG, copyHTML } from "../../bll/exports"


export const Buttons = (props) => {
    return (
        <div className = "tools_elem">
            <button className="btn" onClick = {saveAsPNG}>Сохранить в png</button>
            <button className="btn" onClick={e=>copyHTML(props.destLink)}>Скопировать баннер в буфер как html</button>
            <button className="btn" onClick = {props.exportToJSON}>Скопировать конфигурацию как json</button>
        </div>

    )
}