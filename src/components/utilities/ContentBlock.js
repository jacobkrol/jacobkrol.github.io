import React from 'react';
import '../../styles/ContentBlock.css';

const bgcolors = ["#F6F6F6","#CCF2DD", "#BBEEF2", "#CCF"];

// ---- PROPS ----
// ** key required **
// props.bg (opt, default 0) = integer [0-3] defining background color from palette
// props.title (req.) = string for content block title
// props.size (opt, default large) = 'small', 'medium', or 'large' indicating block width (approx. 25%, 50%, 100%)
// props.children (req.) = elements to be nested inside the content block

function ContentBlock(props) {
    return (
        <div className={`content-block ${props.size || 'large'}`} style={{backgroundColor: props.bg ? bgcolors[props.bg] : bgcolors[0] }}>
            <div className="content-block-title">
                {props.title
                    ? <h3>{props.title}</h3>
                    : null
                }
            </div>
            {props.children}
        </div>
    )
}

export default ContentBlock;
