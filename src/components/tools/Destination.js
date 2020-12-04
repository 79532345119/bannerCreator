import React, { useState } from "react"


export const Destination = () => {

    const [destLink, setDestLink] = useState('')
    const destLinkHandler = 
        event => {
            setDestLink(event.target.value)
        }
    
    return (
        <div className="tools_elem" >
            <label htmlFor="destLink">ссылка, куда ведет баннер</label>
            <input type="text" id="destLink" value={destLink} onChange={destLinkHandler} />
        </div>       
    )
}