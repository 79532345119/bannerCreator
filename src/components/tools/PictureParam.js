import React from "react"


export const PictureParam =(props) => {

    return (
        <div className = "tools_elem">
        <label htmlFor="picLink">ссылка на картинку</label>
        <input type="text" placeholder="ссылка на картинку" 
               id="picLink" value={props.picLink} onChange={e=>props.setPicLink(e.target.value)}/>                 
        <label htmlFor="picScale">масштабировать картинку</label>
        <span>
            <input className="sm" type="number" id="picScale" value={props.picScaleX}
                onChange={e=>props.setPicScaleX(e.target.value)} />
            <input className="sm" type="number" value={props.picScaleY}
                onChange={e=>props.setPicScaleY(e.target.value)} />
        </span>

        </div>
    )
}