import React from 'react';
import '../../styles/Star.css';

const colors = ["transparent","#FF4","#B30","#F90","#2B0","#03F"];

function Star(props) {
    return (
        <span className="star" style={{backgroundColor: props.fill ? colors[props.fill] : colors[0]}}></span>
    )
}

export default Star;
