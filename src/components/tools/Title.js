import React from "react"

export const Title = (props) =>{
   console.log("render Title")
   return (<ul className="tools_elem" >
              <label htmlFor="title">введите слоган</label>
              {(props.titles.length <3) ? <button onClick={props.onAddLine} >добавить строку</button> : null }
                      
                 { props.titles.map((item, i)=>{
                     return <li key={item.id}>
                        <span>
                            <i className="material-icons">format_size</i>
                            <input type="color" className="sm" value = {item.fontColor} onChange = {e=>props.setFontColor(e.target.value, item.id)} />
                            <input type="number" className="sm" value = {item.fontSize} onChange = {e=>props.setFontSize(e.target.value, item.id)} /> 
                            <input type="text" id="title" placeholder="введите слоган" value = {item.title} onChange = {e=>props.onTitleInput(e.target.value, item.id)} />
                            {(props.titles.length > 1)? <i className="material-icons" onClick={e=>props.onLineDelete(item.id)} >delete</i> : null}  
                        </span>
                    </li>
                 })
              }
          </ul>
       )
}