import React from "react"

export const Title = (props) =>{
       
       return (<ul className="tools_elem" >
                  <label htmlFor="title">введите слоган</label>
                  <button onClick={props.onAddLine}>добавить строку</button>
                      
              { props.titles.map((item, i)=>{
                     return <li key={item.id}>
                            <span>
                                   <i className="material-icons">format_size</i>
                                   <input type="color" className="sm" value = {item.fontColor} onChange = {e=>props.setFontColor(e.target.value)} />
                                   <input type="number" className="sm" value = {item.fontSize} onChange = {e=>props.setFontSize(e.target.value)} /> 
                                   <input type="text" id="title" placeholder="введите слоган" value = {item.title} onChange = {e=>props.onTitleInput(e.target.value, item.id)} />
                                   <i className="material-icons green" >done</i>
                                   <i className="material-icons" >delete</i>
                            </span>
                    </li>
                 })
              }
          </ul>
       )
}