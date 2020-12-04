import React, { useState } from "react"
import "./BannerParametersForm.css" 


export const BannerParametersForm = () => {

    const [widthValue, setWidthValue] = useState (600)
    const [heightValue, setHeightValue] = useState (900)
    const [borderRadiusValue, setborderRadiusValueValue] = useState (15)


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
        console.log(event.target[0].value)
    }

    return (

        <form className ="tools_elem" onSubmit={onBannerSizeSubmit}>
        <h3>Параметры баннера</h3>
            <label htmlFor="widthValue">ширина</label>
            <input type="number" id="widthValue" value = {widthValue} 
                    onChange = {onWidthInput}
                    placeholder = "введите ширину банера" />
            <label htmlFor="heightValue">высота</label>            
            <input type="number" id="heightValue" value = {heightValue} 
                    onChange = {onHeightInput}
                    placeholder = "введите высоту банера" />
            <label htmlFor="borderRadiusValue">скругление</label>
            <input type="number" id="borderRadiusValue" value = {borderRadiusValue} 
                    onChange = {onborderRadiusInput}
                    placeholder = "задайте скругление" />
            <button type="submit">применить</button>

        </form>
    )
}