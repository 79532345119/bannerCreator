import React, { useState } from "react"


export const PictureParam =() => {
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
               id="picLink" value={picLink} onChange={picLinkHandler}/>                 
        <label htmlFor="picScale">масштабировать картинку</label>
        <input type="number" id="picScale" value={picScale}
               onChange={picScaleHandler}
            />
        </div>
    )
}