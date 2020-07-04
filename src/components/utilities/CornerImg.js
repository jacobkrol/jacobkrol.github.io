import React from 'react';
import '../../styles/CornerImg.css';
import UICLogo from '../../graphics/uic-full-logo-2.png';

function CornerImg() {
    return (
        <div id="corner-logo-container">
            <img id="corner-logo" alt="uic logo" src={UICLogo} />
        </div>
    )
}

export default CornerImg;
