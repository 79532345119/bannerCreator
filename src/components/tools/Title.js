import React, { useState } from "react"


export const Title = () => {

    const [primaryFontSize, setPrimaryFontSize] = useState(72)
    const onPrimaryFontSizeSet = (event) => {
        setPrimaryFontSize(event.target.value)
    }

    
    const [secondaryFontSize, setSecondaryFontSize] = useState(48)
    const onSecondaryFontSizeSet = (event) => {
        setSecondaryFontSize(event.target.value)
    }


    const [primaryTitleValue, setPrimaryTitleValue] = useState('')
    const onPrimaryTitleValueSet = (event) => {
        setPrimaryTitleValue(event.target.value)
    }


    const [secondaryTitleValue, setSecondaryTitleValue] = useState('')
    const onSecondaryTitleValueSet =(event) => {
        setSecondaryTitleValue(event.target.value)
    }
    return (
        <div className="tools_elem">
            <label htmlFor="title">введите слоган</label>
            <span>
                <i className="material-icons">format_size</i>
                <input type="number" className="sm" value = {primaryFontSize} onChange={onPrimaryFontSizeSet} />
                <input type="text" id="title" placeholder="введите слоган" value={primaryTitleValue} onChange={onPrimaryTitleValueSet}/>
            </span>
            
            <span>
                <i className="material-icons">format_size</i>
                <input type="number" className="sm" value = {secondaryFontSize} onChange={onSecondaryFontSizeSet} />
                <input type="text" placeholder="введите слоган" value={secondaryTitleValue} onChange={onSecondaryTitleValueSet}/>
            </span>
            
        </div>
        
    )
}