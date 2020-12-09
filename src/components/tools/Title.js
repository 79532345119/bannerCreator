import React from "react"


export const Title = (props) => {

    return (
        <div className="tools_elem">
            <label htmlFor="title">введите слоган</label>
            <span>
                <i className="material-icons">format_size</i>
                <input type="color" className="sm" value={props.primaryFontSizeColor} 
                       onChange={e=>props.setPrimaryFontSizeColor(e.target.value)} />
                <input type="number" className="sm" value = {props.primaryFontSize} 
                       onChange={e=>props.setPrimaryFontSize(e.target.value) } /> 
                <input type="text" id="title" placeholder="введите слоган" value={props.primaryTitleValue} 
                       onChange={e=>props.setPrimaryTitleValue(e.target.value)}/>
            </span>
            
            <span>
                <i className="material-icons">format_size</i>
                <input type="color" className="sm" value={props.secondaryFontSizeColor} 
                       onChange={e=>props.setSecondaryFontSizeColor(e.target.value)} />
                <input type="number" className="sm" value = {props.secondaryFontSize} 
                       onChange={e=>props.setSecondaryFontSize(e.target.value)} />
                <input type="text" placeholder="введите слоган" rows="2"
                       value={props.secondaryTitleValue} onChange={e=>props.setSecondaryTitleValue(e.target.value)}/>
            </span>

            <span>
                <i className="material-icons">format_size</i>
                <input type="color" className="sm" value={props.secondary2FontSizeColor} 
                       onChange={e=>props.setSecondary2FontSizeColor(e.target.value)} />
                <input type="number" className="sm" value = {props.secondary2FontSize} 
                       onChange={e=>props.setSecondary2FontSize(e.target.value)} />
                <input type="text" placeholder="введите слоган" rows="2"
                       value={props.secondary2TitleValue} onChange={e=>props.setSecondary2TitleValue(e.target.value)}/>
            </span>
            
        </div>
        
    )
}