import React from 'react';
import { useCanv } from '../hooks/useCanv';

function CanvasBG() {
    const [ canvRef, canvWidth, canvHeight ] = useCanv();

    // const handleScroll = (evt) => {
    //     const pos = document.scrollingElement.scrollTop;
    //     if(pos !== scrollPos) setScrollPos([pos]);
    // }

    return (
        <>
            <canvas
                ref={canvRef}
                className="cover-canvas"
                width={canvWidth}
                height={canvHeight} />
            <div className="overlay"></div>
        </>
    )
}

export default CanvasBG;
