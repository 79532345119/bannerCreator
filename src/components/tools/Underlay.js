import React, { useState } from "react"


export const Underlay = () => {

    const [isGradientUsed, setIsGradientUsed] = useState(true)

    const [tempUnderlayColor, setTempUnderlayColor] = useState('')

    const [underlayColors, setUnderlayColors] = useState([])

    const onInputTempUnderlayColor = (event) => {
        setTempUnderlayColor(event.target.value)
    }

    const onUseGradientToggle = () => {      
    }
    const onAddUnderlayColor = (event) => {
        if(!isGradientUsed) {
            return setUnderlayColors(event.target.value)
        } else {
            event.preventDefault()
            const newUnderlayColor = {
                id: Date.now(),
                position: 100 / underlayColors.length || 0,
                underlayColor: tempUnderlayColor
            }
            setUnderlayColors([...underlayColors, newUnderlayColor])         
        }
    }

    return (
        <form className="tools_elem">
            <span>
                <input type="checkbox" id="isGradUsed" className="sm" checked={isGradientUsed} 
                onChange={onUseGradientToggle} />
                <label htmlFor="isGradUsed">использовать градиент</label>
            </span>
            <ul>
                {underlayColors.map(underlayColor => {
                    return <li>
                        <span style={{color: underlayColor.underlayColor}}>цвет настроения</span>
                    </li>
                })}
            </ul>
            <span>
                <input type="color" id="underlayColor" className="sm" value = {tempUnderlayColor} onInput={onInputTempUnderlayColor} />
                <button onClick={onAddUnderlayColor} style={{color: "red"}} >добавить цвет</button>
            </span>



        </form>
    )
}