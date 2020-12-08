import React, { useState } from "react"


export const PictureParam =(props) => {
    const [picLink, setPicLink] = useState('')
    const [picScale, setPicScale] = useState(100)

    const picLinkHandler = (event) => {
        setPicLink(event.target.value)
    }

    const picScaleHandler = (event) => {
        setPicScale(event.target.value)
    }

    return (
        <div className = "tools_elem">
        <label htmlFor="picLink">ссылка на картинку</label>
        <input type="text" placeholder="ссылка на картинку" 
               id="picLink" value={props.picLink} onChange={e=>props.setPicLink(e.target.value)}/>                 
        <label htmlFor="picScale">масштабировать картинку</label>
        <input type="number" id="picScale" value={props.picScale}
               onChange={e=>props.setPicScale(e.target.value)}
            />
        </div>
    )
}