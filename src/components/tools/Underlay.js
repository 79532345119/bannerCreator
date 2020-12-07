import React, { useState } from "react"


export const Underlay = (props) => {

    const [tempUnderlayColor, setTempUnderlayColor] = useState("#00008b")

    const onInputTempUnderlayColor = (event) => {
        setTempUnderlayColor(event.target.value)
    }


    return (
        <form onSubmit={e=>e.preventDefault()} className="tools_elem">

            <ul>
                {props.underlayColor.map(underlayColor => {
                    return <li key={underlayColor.id}>
                        <span style={{color: underlayColor.color}}>цвет настроения</span>
                    </li>
                })}
            </ul>
            <span>
                <input type="color" id="underlayColor" className="sm" value = {tempUnderlayColor} onInput={onInputTempUnderlayColor} />
                <button onClick={

                    props.onAddUnderlayColor.bind(null, tempUnderlayColor)
                    
                    }  style={{color: "red"}} >добавить цвет</button>
            </span>



        </form>
    )
}