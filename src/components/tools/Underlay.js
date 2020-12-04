import React, { useState } from "react"


export const Underlay = () => {

    const [isGradientUsed, setIsGradientUsed] = useState(true)

    const [underlayColors, setUnderlayColors] = useState([])



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
                underlayColor: event.target.value
            }
            setUnderlayColors([...underlayColors, newUnderlayColor])         
        }
    }

    return (
        <form className="tools_elem">
            <span>
                <input type="checkbox" id="isGradUsed" checked={isGradientUsed} 
                onChange={onUseGradientToggle} />
                <label htmlFor="isGradUsed">использовать градиент</label>
            </span>
            <span>
                <input type="color" id="underlayColor" onInput={onAddUnderlayColor} />
                <button onClick={onAddUnderlayColor} style={{color: "red"}} >добавить цвет</button>
            </span>
            <ul>
                {underlayColors.map(underlayColor => {return <li>
                        <span style={{backgroundColor: underlayColor}}></span>
                    </li>
                })}
            </ul>


        </form>
    )
}