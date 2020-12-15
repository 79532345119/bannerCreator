import React, { useMemo } from "react"


export const Destination = ({destLink}, {setDestLink} ) => {
    return ( useMemo(()=> {
        return <div className="tools_elem" >
        <label htmlFor="destLink">ссылка, куда ведет баннер</label>
        <input type="text" id="destLink" value={destLink} onChange={e=>setDestLink(e.target.value)} />
    </div> 
    }, [destLink, setDestLink])
      
    )
}
