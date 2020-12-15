import React, { useState } from "react"


export const Underlay = (props) => {
    

    const [tempUnderlayColor, setTempUnderlayColor] = useState("#00008b")

    const onInputTempUnderlayColor = (event) => {
        setTempUnderlayColor(event.target.value)
    }


    return (
        <form onSubmit={e=>e.preventDefault()} className="tools_elem">

            <ul>
                {props.underlayColors.map(underlayColor => {
                    return <li key={underlayColor.id}>
                        <span style={{color: underlayColor.color}}>цвет настроения<i className="material-icons" onClick={props.onDeleteUnderlayColor.bind('null', underlayColor.id)}>delete</i></span>
                    </li>
                })}
            </ul>
            <span>
                <input type="color" id="underlayColor" className="sm" value = {tempUnderlayColor} onInput={onInputTempUnderlayColor} />
                
                <button onClick={

                    props.onAddUnderlayColor.bind(null, tempUnderlayColor)
                    
                    } >добавить цвет</button>
            </span>



        </form>
    )
}