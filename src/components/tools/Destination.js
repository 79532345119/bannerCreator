import React from "react"


export const Destination = (props ) => {
    return ( <div className="tools_elem" >
        <label htmlFor="destLink">ссылка, куда ведет баннер</label>
        <input type="text" id="destLink" value={props.destLink} onChange={e=>props.setDestLink(e.target.value)} />
    </div>      
    )
}
