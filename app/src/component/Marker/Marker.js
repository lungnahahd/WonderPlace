import React from 'react'
import './Marker.scss'
function Marker({title}) {
  
     
    return (
        <>
            <div className="customoverlay">
                <a href="" target="_blank">
                    <span className ="title">
                        {title}
                    </span>
                </a>
            </div>
        </>
    )
}
export default Marker