import React from "react"

const TitleInput = (props) =>{

       return (<>
              <ul className="tools_elem">
              {props.titles.map(title=>{
                     return (
                            <li key="title.id">
                     <label htmlFor="title">введите слоган</label>
                            <span>
                                   <i className="material-icons">format_size</i>
                                   <input type="color" className="sm" value={title.fontColor} 
                                          onChange={e=>title.setFontColor(e.target.value)} />
                                   <input type="number" className="sm" value = {title.fontSize} 
                                          onChange={e=>title.setFontSize(e.target.value) } /> 
                                   <input type="text" id="title" placeholder="введите слоган" value={title.title} 
                                          onChange={e=>title.addTitle(e.target.value)}/>
                                   <i className="material-icons" onClick={title.onDeleteTitle.bind('null', title.id)}>delete</i>
                            </span>
                            <button>добавить строку</button>   

                     </li>
                     )
              })}


              </ul>

          </>
       )
}


export const Title = (props) => {
       
    return (
       <TitleInput titles={props.titles} />       
    )
}