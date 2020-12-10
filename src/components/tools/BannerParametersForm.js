import React, { useState } from "react"
import "./BannerParametersForm.css" 


export const BannerParametersForm = (props) => {
    
    const [width, setWidthValue] = useState (600)
    const [height, setHeightValue] = useState (900)
    const [borderRadius, setborderRadiusValueValue] = useState (15)


    const onWidthInput = (event) => {
        setWidthValue(event.target.value)
    }
    const onHeightInput = (event) => {
        setHeightValue(event.target.value)
    }
    const onborderRadiusInput = (event) => {
        setborderRadiusValueValue(event.target.value)
    }
    const onBannerSizeSubmit = (event) => {
        event.preventDefault()
        const bannerSize = {}
        bannerSize.width = event.target[0].value
        bannerSize.height = event.target[1].value
        bannerSize.borderRadius = event.target[2].value
        bannerSize.ratio = bannerSize.width / bannerSize.height
        props.setBannerSize(bannerSize)

    }

    return (

        <form className ="tools_elem" onSubmit={onBannerSizeSubmit}>
        <h3>Параметры баннера</h3>
            <label htmlFor="widthValue">ширина</label>
            <input type="number" id="widthValue" value = {width} 
                    onChange = {onWidthInput}
                    placeholder = "введите ширину банера" />
            <label htmlFor="heightValue">высота</label>            
            <input type="number" id="heightValue" value = {height} 
                    onChange = {onHeightInput}
                    placeholder = "введите высоту банера" />
            <label htmlFor="borderRadiusValue">скругление</label>
            <input type="number" id="borderRadiusValue" value = {borderRadius} 
                    onChange = {onborderRadiusInput}
                    placeholder = "задайте скругление" />
            <button type="submit">применить</button>
        </form>
    )
}