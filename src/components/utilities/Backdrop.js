import React from 'react';
import '../../styles/Backdrop.css';

// ---- PROPS ----
// props.imgName (opt.) = image source relative link through import
// props.overlayColor (opt.) = rgb(rr, bb, gg) which is given 0.7 opacity, 'rgb()' returns a transparent overlay

function Backdrop(props) {
    return (
        <div className="cover-image" style={{backgroundImage: "url(" + props.imgName + ")"}}>
            <div className="overlay" style={{backgroundColor: props.overlayColor ? props.overlayColor.slice(0,props.overlayColor.length-1)+",0.7)" : "rgba(40, 150, 160, 0.7)"}}>
            </div>
        </div>
    )
}

export default Backdrop;
